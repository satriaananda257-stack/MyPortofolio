feather.replace();

document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.hamburger');
  const navLink = document.querySelector('.nav-link');
  const formElements = {
    name: document.getElementById('name'),
    email: document.getElementById('email'),
    message: document.getElementById('message'),
    submitBtn: document.getElementById('sumbit-btn')
  };

  formElements.submitBtn?.addEventListener('click', () => {
    setTimeout(() => {
      formElements.name.value = "";
      formElements.email.value = "";
      formElements.message.value = "";
      formElements.submitBtn.value = "";
    }, 1);
  });

  function toggleMenu() {
    hamburger?.classList.toggle('active');
    navLink?.classList.toggle('active');
  }

  hamburger?.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleMenu();
  });

  document.querySelectorAll('.nav-link a').forEach(link => {
    link.addEventListener('click', function(e) {
      if (this.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
      
      setTimeout(() => {
        hamburger?.classList.remove('active');
        navLink?.classList.remove('active');
      }, 300);
    });
  });
  document.addEventListener('click', (e) => {
    if (navLink?.classList.contains('active') && 
        !hamburger?.contains(e.target) && 
        !navLink?.contains(e.target)) {
      hamburger?.classList.remove('active');
      navLink?.classList.remove('active');
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navLink?.classList.contains('active')) {
      hamburger?.classList.remove('active');
      navLink?.classList.remove('active');
    }
  });
});