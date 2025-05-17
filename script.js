const exploits = [
       {
        name: "Xeno",
        desc: "free executor and no key",
        img: "https://cdn.discordapp.com/icons/1289659915790450849/8869b47320191aa079258005df16c63d.webp?size=2048",
        link: "https://www.xeno.now/"
      },
      {
        name: "luna",
        desc: "free executor and no key",
        img: "https://cdn.discordapp.com/icons/1313897186542747688/7815105b6140b981182baacacdea926d.webp?size=2048",
        link: "https://getluna.win/"
      },
      {
        name: "Nezur",
        desc: "Key and free",
        img: "https://cdn.discordapp.com/icons/1028337299441864806/a_aac76f50fea691eac237c7fec22fc224.gif?size=2048",
        link: "https://discord.gg/Q8q4hK43Fc"
      }
  ];
  
  // Toast (notification)
  function showToast(message) {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerText = message;
    container.appendChild(toast);
  
    setTimeout(() => {
      toast.classList.add('hide');
      toast.addEventListener('transitionend', () => toast.remove());
    }, 4000);
  }
  
  // Navigation
  function showSection(id) {
    document.querySelectorAll('.centered').forEach(el => el.style.display = 'none');
    document.getElementById(id + '-section').style.display = 'block';
  
    if (id === 'exploit') loadExploits();
  }
  
  // Génération auto des exploits
  function loadExploits() {
    const grid = document.getElementById('exploit-grid');
    grid.innerHTML = "";
  
    exploits.forEach(exploit => {
      const card = document.createElement("div");
      card.className = "exploit-card";
      card.innerHTML = `
        <img src="${exploit.img}" alt="${exploit.name}">
        <div class="exploit-content">
          <h3>${exploit.name}</h3>
          <p>${exploit.desc}</p>
          <button onclick="copyLink('${exploit.link}', '${exploit.name}')">Copier Lien</button>
        </div>
      `;
      grid.appendChild(card);
    });
  }
  
  // Copier le lien
  function copyLink(link, name) {
    navigator.clipboard.writeText(link);
    showToast(`Lien ${name} copié !`);
  }
  


  const myScripts = [
    {
      name: "Animal Simulator",
      description: "Farm, auto PVP, silentAim",
      image: "https://tr.rbxcdn.com/180DAY-835c38dd1112ef1e6feb7ced05e62f93/768/432/Image/Webp/noFilter", // Remplace par ton image plus tard
      link: `loadstring(game:HttpGet("https://raw.githubusercontent.com/krix281f/AS-script/refs/heads/main/animal.lua"))()`
    },
    {
      name: "World zero",
      description: "Soon",
      image: "https://cdn.discordapp.com/attachments/1361311964177105059/1373239026424877118/noFilter.webp?ex=6829b001&is=68285e81&hm=5b9249ff226eedc2e403ecf5bdd59a0707b3540f3dafb1fbcb921600487a379d&", // Remplace par ton image plus tard
      link: `Soon`
    }
  ];  
  
  function loadMyScripts() {
    const grid = document.getElementById('myscript-grid');
    grid.innerHTML = "";
    myScripts.forEach(script => {
      const card = document.createElement('div');
      card.className = 'exploit-card';
      card.innerHTML = `
        <img src="${script.image}" alt="${script.name}">
        <div class="exploit-content">
          <h3>${script.name}</h3>
          <p>${script.description}</p>
          <button onclick="copyScriptLink('${script.link}')">Copier Lien</button>
        </div>
      `;
      grid.appendChild(card);
    });
  }
  
  function copyScriptLink(link) {
    navigator.clipboard.writeText(link).then(() => {
      showToast("Lien du script copié !");
    });
  }
  
  // Appel automatique quand section affichée
  function showSection(id) {
    document.querySelectorAll('.centered').forEach(el => el.style.display = 'none');
    document.getElementById(id + '-section').style.display = 'block';
  
    if (id === 'exploit') loadExploits();
    if (id === 'myscript') loadMyScripts();
  }  
  
