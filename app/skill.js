fetch('/app/skill.json')
  .then(res => res.json())
  .then(skills => {
    const grid = document.getElementById('skill-grid');

    skills.forEach(skill => {
      const card = document.createElement('article');
      card.className = [
        'bg-white rounded-xl p-5 text-center shadow-lg',
        'hover:-translate-y-2.5 hover:shadow-xl transition-all duration-300',
        'relative overflow-hidden',
        'before:content-[\'\'] before:absolute before:top-0 before:left-0',
        'before:w-full before:h-1.25 before:bg-linear-to-r before:from-purple before:to-blue'
      ].join(' ');

      card.innerHTML = `
        <div class="w-12 h-12 mx-auto mb-3 flex items-center justify-center bg-linear-to-br from-purple to-blue rounded-full">
          <img src="${skill.gambar}" alt="${skill.nama}" class="w-7 h-7">
        </div>
        <h3 class="text-base font-semibold mb-2 text-text-dark-soft">${skill.nama}</h3>
        <div class="h-1.5 bg-progress-bg rounded-full overflow-hidden mb-3">
          <div class="h-full bg-linear-to-r from-purple to-blue rounded-full" style="width:${skill.level}%"></div>
        </div>
        <p class="text-xs text-text-secondary font-medium">${skill.level}%</p>
      `;

      grid.appendChild(card);
    });
  })
  .catch(err => console.error('Gagal load skill.json:', err));
