const handler=async(_0x1ba918,{conn:_0x151672,isAdmin:_0x1908e3,isOwner:_0x22b719,args:_0x1a6355,usedPrefix:_0x598149,command:_0x4acc03})=>{if(!(_0x1908e3||_0x22b719)){global['dfail']('admin',_0x1ba918,_0x151672);throw![];}const _0x6540fd={'open':'not_announcement','buka':'not_announcement','on':'not_announcement','1':'not_announcement','close':'announcement','tutup':'announcement','off':'announcement','0':'announcement'}[_0x1a6355[0x0]||''];if(_0x6540fd===undefined){const _0x32abcf='\x0a*•\x20Ejemplo:*\x0a*'+(_0x598149+_0x4acc03)+'\x20open\x201*\x0a*'+(_0x598149+_0x4acc03)+'\x20close\x201*\x0a📌\x20*Ejemplo\x20de\x20uso:*\x20*'+(_0x598149+_0x4acc03)+'\x20close\x201*\x20\x0a*🌿\x20Para\x20que\x20el\x20grupo\x20este\x20cerrado\x20una\x20hora.*\x0a';_0x1ba918['reply'](_0x32abcf);throw![];}const _0x1dfe27=0x5265c00*_0x1a6355[0x1]/0x18;await _0x151672['groupSettingUpdate'](_0x1ba918['chat'],_0x6540fd)['then'](async _0x1b5ace=>{_0x1ba918['reply']('⚠️\x20*_Grupo\x20'+(_0x6540fd=='announcement'?'cerrado':'abierto')+'\x20'+(_0x1a6355[0x1]?'durante\x20*'+clockString(_0x1dfe27)+'_*':''));}),_0x1a6355[0x1]&&setTimeout(async()=>{await _0x151672['groupSettingUpdate'](_0x1ba918['chat'],''+(_0x6540fd=='announcement'?'not_announcement':'announcement'))['then'](async _0x25a1bf=>{_0x151672['reply'](_0x1ba918['chat'],(_0x6540fd=='not_announcement'?'*El\x20grupo\x20ha\x20sido\x20cerrado,\x20¡ahora\x20solo\x20los\x20administradores\x20pueden\x20enviar\x20mensajes!*':'*El\x20grupo\x20se\x20ha\x20abierto,\x20¡ahora\x20todos\x20los\x20miembros\x20pueden\x20enviar\x20mensajes!*')+'!');});},_0x1dfe27);};handler['help']=['grouptime\x20*<open/close>*\x20*<número>*'],handler['tags']=['group'],handler['command']=/^(grouptime|gctime)$/i,handler['register']=!![],handler['group']=!![],handler['botAdmin']=!![];export default handler;function clockString(_0x2a488a){const _0x29c648=Math['floor'](_0x2a488a/0x36ee80),_0x13a4a0=Math['floor'](_0x2a488a/0xea60)%0x3c,_0x471afe=Math['floor'](_0x2a488a/0x3e8)%0x3c;return console['log']({'ms':_0x2a488a,'h':_0x29c648,'m':_0x13a4a0,'s':_0x471afe}),[_0x29c648,_0x13a4a0,_0x471afe]['map'](_0x453122=>_0x453122['toString']()['padStart'](0x2,0x0))['join'](':');}