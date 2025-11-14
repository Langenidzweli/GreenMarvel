document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.order-tracking-form');
  const result = document.getElementById('tracking-result');
  const stepsContainer = document.getElementById('tracking-steps');
  const placeholder = result.querySelector('.tracking-placeholder');
  const spinner = document.getElementById('tracking-spinner');
  const saveBtn = document.getElementById('saveTracking');
  const copyBtn = document.getElementById('copyLink');
  const shareBtn = document.getElementById('shareStatus');
  const actionsBar = document.getElementById('tracking-actions');

  const steps = [
    'Order Placed',
    'Processed',
    'Shipped',
    'Out for Delivery',
    'Delivered'
  ];

  function formatTime(d) {
    return d.toLocaleString();
  }

  function renderSteps(activeIndex, timestamps) {
    stepsContainer.innerHTML = '';
    steps.forEach((label, i) => {
      const step = document.createElement('div');
      step.className = 'tracking-step' + (i < activeIndex ? ' completed' : (i === activeIndex ? ' in-progress' : ''));

      const circle = document.createElement('div');
      circle.className = 'step-circle';
      circle.textContent = i < activeIndex ? '✓' : i + 1;

      const stepLabel = document.createElement('div');
      stepLabel.className = 'step-label';
      stepLabel.textContent = label;

      const time = document.createElement('div');
      time.className = 'step-time';
      time.textContent = timestamps && timestamps[i] ? formatTime(new Date(timestamps[i])) : '';

      step.appendChild(circle);
      step.appendChild(stepLabel);
      step.appendChild(time);
      stepsContainer.appendChild(step);
    });
  }

  function simulateLookup(orderId) {
    // deterministic pseudo-random based on orderId so results are repeatable
    let seed = 0;
    for (let i = 0; i < orderId.length; i++) seed = (seed * 31 + orderId.charCodeAt(i)) >>> 0;
    const maxIndex = steps.length - 1;
    const activeIndex = Math.min(maxIndex, (seed % (steps.length)) );

    // build timestamps spaced by a few hours in the past
    const now = Date.now();
    const timestamps = [];
    const base = now - (activeIndex * 1000 * 60 * 60 * 6); // 6 hours between steps
    for (let i = 0; i <= activeIndex; i++) {
      timestamps[i] = base + i * 1000 * 60 * 60 * 6;
    }

    return { activeIndex, timestamps };
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const orderId = (form['order-id'].value || '').trim();
    const email = (form['email'].value || '').trim();

    if (!orderId || !email) {
      placeholder.textContent = 'Please provide both Order ID and email.';
      return;
    }

    // show spinner
    spinner.hidden = false;
    spinner.setAttribute('aria-hidden', 'false');
    placeholder.textContent = 'Looking up order — please wait...';
    stepsContainer.hidden = true;
    stepsContainer.setAttribute('aria-hidden', 'true');

    setTimeout(() => {
      const { activeIndex, timestamps } = simulateLookup(orderId);
      spinner.hidden = true;
      spinner.setAttribute('aria-hidden', 'true');

      // animate through steps up to activeIndex
      let current = 0;
      placeholder.style.display = 'none';
      stepsContainer.hidden = false;
      stepsContainer.setAttribute('aria-hidden', 'false');

      const interval = setInterval(() => {
        renderSteps(current, timestamps);
        current++;
        if (current > activeIndex) {
          clearInterval(interval);
          // final render ensures completed steps marked
          renderSteps(activeIndex + 1, timestamps);
          // friendly status text for the user
          const statusText = document.createElement('div');
          statusText.className = 'tracking-status-text';
          statusText.style.marginTop = '12px';
          statusText.style.color = '#333';
          statusText.textContent = 'Current status: ' + steps[Math.min(activeIndex, steps.length - 1)];
          // remove old if exists
          const old = result.querySelector('.tracking-status-text');
          if (old) old.remove();
          result.appendChild(statusText);

          // reveal actions
          if (actionsBar) actionsBar.hidden = false;
        }
      }, 450);
    }, 900);
  });

  // Save tracking locally
  if (saveBtn) {
    saveBtn.addEventListener('click', () => {
      const orderId = document.getElementById('order-id').value.trim();
      const email = document.getElementById('email').value.trim();
      if (!orderId || !email) return alert('Please fill Order ID and email to save.');
      const saved = JSON.parse(localStorage.getItem('savedTrackings') || '[]');
      saved.push({ orderId, email, savedAt: Date.now() });
      localStorage.setItem('savedTrackings', JSON.stringify(saved));
      saveBtn.textContent = 'Saved';
      setTimeout(() => saveBtn.textContent = 'Save', 1500);
    });
  }

  // Copy tracking link
  if (copyBtn) {
    copyBtn.addEventListener('click', async () => {
      const orderId = document.getElementById('order-id').value.trim();
      if (!orderId) return alert('Enter Order ID to copy link.');
      const url = `${window.location.origin}${window.location.pathname}?order=${encodeURIComponent(orderId)}`;
      try {
        await navigator.clipboard.writeText(url);
        copyBtn.textContent = 'Link Copied';
        setTimeout(() => copyBtn.innerHTML = '<i class="fas fa-link"></i> Copy Link', 1500);
      } catch (e) {
        prompt('Copy this link:', url);
      }
    });
  }

  // Share status using Web Share API when available
  if (shareBtn) {
    shareBtn.addEventListener('click', async () => {
      const statusText = result.querySelector('.tracking-status-text')?.textContent || 'Order status available';
      const url = window.location.href;
      if (navigator.share) {
        try { await navigator.share({ title: 'Order Status', text: statusText, url }); }
        catch (err) { alert('Share cancelled'); }
      } else {
        // fallback: copy to clipboard
        try { await navigator.clipboard.writeText(`${statusText} — ${url}`); alert('Status copied to clipboard'); }
        catch (e) { prompt('Share this status:', `${statusText} — ${url}`); }
      }
    });
  }
});
