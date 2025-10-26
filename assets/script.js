// Common JS for LuffyStudy
document.addEventListener('DOMContentLoaded',function(){
  // Set footer year
  const yearEls = document.querySelectorAll('.js-year');
  yearEls.forEach(el=>el.textContent = new Date().getFullYear());

  // simple search handler (client-side demo)
  const searchBtn = document.getElementById('searchBtn');
  if(searchBtn){
    searchBtn.addEventListener('click',()=>{
      const q = (document.getElementById('searchInput')||{}).value||'';
      if(!q.trim()) return alert('অনুগ্রহ করে সার্চ টার্ম লিখুন');
      alert('Search demo: "'+q+'" — তোমাকে পোস্টে নিয়ে যাবে (demo)');
    });
  }

  // subscribe button demo
  const subBtn = document.getElementById('subscribeBtn');
  if(subBtn){
    subBtn.addEventListener('click',()=>{
      const email = (document.getElementById('emailInput')||{}).value||'';
      if(!email.includes('@')) return alert('সঠিক ইমেল দিন');
      let list = JSON.parse(localStorage.getItem('luffy_news')||'[]');
      if(list.includes(email)) return alert('ইমেইল ইতোমধ্যে আছে');
      list.push(email); localStorage.setItem('luffy_news',JSON.stringify(list));
      alert('ধন্যবাদ, সাবস্ক্রাইব সম্পন্ন');
      document.getElementById('emailInput').value = '';
    });
  }

  // contact demo
  const contactBtn = document.getElementById('contactBtn');
  if(contactBtn){
    contactBtn.addEventListener('click',()=>{
      const name = document.getElementById('contactName').value||'';
      const email = document.getElementById('contactEmail').value||'';
      const msg = document.getElementById('contactMsg').value||'';
      if(!name||!email||!msg) return alert('সব ইনপুট পূরণ করুন');
      const leads = JSON.parse(localStorage.getItem('luffy_leads')||'[]');
      leads.push({name,email,msg,date:new Date().toISOString()});
      localStorage.setItem('luffy_leads',JSON.stringify(leads));
      alert('আপনার বার্তা পাঠানো হয়েছে — ধন্যবাদ');
      document.getElementById('contactName').value='';
      document.getElementById('contactEmail').value='';
      document.getElementById('contactMsg').value='';
    });
  }

});
