import _0x56acde from'node-fetch';const handler=async(_0x589101,{conn:_0x48da6b,usedPrefix:_0x3b7277,usedPrefix:_0x16aa5b,__dirname:_0x32a84b,text:_0x2d7ee2,isPrems:_0x18a416})=>{if(_0x3b7277=='a'||_0x3b7277=='A')return;try{const _0x289b0c=imagen2,_0x36ec54=new Date(new Date()+0x36ee80),_0x1d3d8c='es-ES',_0x2b7349=_0x36ec54['toLocaleDateString'](_0x1d3d8c,{'weekday':'long'}),_0xb206e8=_0x36ec54['toLocaleDateString'](_0x1d3d8c,{'day':'2-digit','month':'2-digit','year':'numeric'}),_0x5ea892=process['uptime']()*0x3e8,_0x2efff1=clockString(_0x5ea892),_0x2cc984=global['db']['data']['users'][_0x589101['sender']],{money:_0x13a964,joincount:_0x498393}=global['db']['data']['users'][_0x589101['sender']],{exp:_0x2f1d38,limit:_0x5d5288,level:_0xf342d2,role:_0x315eea,role2:_0x3afc2f}=global['db']['data']['users'][_0x589101['sender']],_0x27647f=Object['values'](global['db']['data']['users'])['filter'](_0x4260db=>_0x4260db['registered']==!![])['length'],_0x87396c=Object['entries'](global['db']['data']['users'])['length']||'0',_0x23659e=String['fromCharCode'](0x200e),_0x2537ca=_0x23659e['repeat'](0x352),_0x2265f2='@'+_0x589101['sender']['split']('@s.whatsapp.net')[0x0],_0xe18b18=['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document'],_0xe6154d=_0xe18b18[Math['floor'](Math['random']()*_0xe18b18['length'])],_0x4830c0=('┌──⊰🧧𝔾𝔼ℕ𝔼ℝ𝔸𝕃🧧\x0a│⊳\x20𝕌𝕤𝕖𝕣:\x20'+_0x2265f2+'\x20*🙌Hola✨*\x20*aquí\x20tienes\x20comandos\x20general*\x0a│⊳\x20🌿\x20.*grupos*\x0a│⊳\x20🌿\x20.*estado*\x0a│⊳\x20🌿\x20.*estatus*\x0a│⊳\x20🌿\x20.*infobot*\x0a│⊳\x20🌿\x20.*speedtest*\x0a│⊳\x20🌿\x20.*Boxmine*\x0a│⊳\x20🌿\x20.*donar*\x0a│⊳\x20🌿\x20.*instalarbot*\x0a│⊳\x20🌿\x20.*creador*\x0a│⊳\x20🌿\x20.*script*\x0a│⊳\x20🌿\x20.*Que\x20es\x20un\x20bot*\x0a│⊳\x20🌿\x20.*reporte\x20<txt>*\x0a│⊳\x20🌿\x20.*join\x20<wagp_url>*_\x0a│⊳\x20🌿\x20.*creador*\x0a│⊳\x20🌿\x20.*bot\x20(sin\x20prefijo)*\x0a└──────────⊰')['trim']();if(_0x589101['isGroup']){let _0x5ae329={'key':{'participants':'0@s.whatsapp.net','remoteJid':'status@broadcast','fromMe':![],'id':'Halo'},'message':{'contactMessage':{'vcard':'BEGIN:VCARD\x0aVERSION:3.0\x0aN:Sy;Bot;;;\x0aFN:y\x0aitem1.TEL;waid='+_0x589101['sender']['split']('@')[0x0]+':'+_0x589101['sender']['split']('@')[0x0]+'\x0aitem1.X-ABLabel:Ponsel\x0aEND:VCARD'}},'participant':'0@s.whatsapp.net'};_0x48da6b['sendMessage'](_0x589101['chat'],{'image':_0x289b0c,'caption':_0x4830c0['trim'](),'mentions':[..._0x4830c0['matchAll'](/@([0-9]{5,16}|0)/g)]['map'](_0x378492=>_0x378492[0x1]+'@s.whatsapp.net')},{'quoted':_0x5ae329});}else{let _0x5d76e7={'key':{'participants':'0@s.whatsapp.net','remoteJid':'status@broadcast','fromMe':![],'id':'Halo'},'message':{'contactMessage':{'vcard':'BEGIN:VCARD\x0aVERSION:3.0\x0aN:Sy;Bot;;;\x0aFN:y\x0aitem1.TEL;waid='+_0x589101['sender']['split']('@')[0x0]+':'+_0x589101['sender']['split']('@')[0x0]+'\x0aitem1.X-ABLabel:Ponsel\x0aEND:VCARD'}},'participant':'0@s.whatsapp.net'};_0x48da6b['sendMessage'](_0x589101['chat'],{'image':_0x289b0c,'caption':_0x4830c0['trim'](),'mentions':[..._0x4830c0['matchAll'](/@([0-9]{5,16}|0)/g)]['map'](_0x535743=>_0x535743[0x1]+'@s.whatsapp.net')},{'quoted':_0x5d76e7});}}catch{_0x48da6b['reply'](_0x589101['chat'],'[❗]\x20ha\x20corrido\x20un\x20error\x20posiblemente\x20intentaste\x20editarlo',_0x589101);}};handler['command']=/^(general)$/i,handler['exp']=0x32,handler['fail']=null,handler['register']=!![],handler['group']=!![];export default handler;function clockString(_0x1fe82b){const _0x599349=isNaN(_0x1fe82b)?'--':Math['floor'](_0x1fe82b/0x36ee80),_0x3534ca=isNaN(_0x1fe82b)?'--':Math['floor'](_0x1fe82b/0xea60)%0x3c,_0x57052f=isNaN(_0x1fe82b)?'--':Math['floor'](_0x1fe82b/0x3e8)%0x3c;return[_0x599349,_0x3534ca,_0x57052f]['map'](_0x8c72f6=>_0x8c72f6['toString']()['padStart'](0x2,0x0))['join'](':');}