const handler=async(_0x1d987b,{conn:_0x5dccec,usedPrefix:_0x50fdc0,text:_0x57180e})=>{if(isNaN(_0x57180e)&&!_0x57180e['match'](/@/g)){}else{if(isNaN(_0x57180e))var _0x3cbe4e=_0x57180e['split']`@`[0x1];else{if(!isNaN(_0x57180e))var _0x3cbe4e=_0x57180e;}}if(!_0x57180e&&!_0x1d987b['quoted'])return _0x5dccec['reply'](_0x1d987b['chat'],'*[❗]\x20USO\x20APROPIADO*\x0a\x0a*┯┷*\x0a*┠≽\x20'+_0x50fdc0+'daradmin\x20@tag*\x0a*┠≽\x20'+_0x50fdc0+'darpoder\x20->\x20responder\x20a\x20un\x20mensaje*\x0a*┷┯*',_0x1d987b);if(_0x3cbe4e['length']>0xd||_0x3cbe4e['length']<0xb&&_0x3cbe4e['length']>0x0)return _0x5dccec['reply'](_0x1d987b['chat'],'*[\x20⚠️\x20]\x20El\x20número\x20ingresado\x20es\x20incorrecto,\x20por\x20favor\x20ingrese\x20el\x20número\x20correcto*',_0x1d987b);try{if(_0x57180e)var _0x457413=_0x3cbe4e+'@s.whatsapp.net';else{if(_0x1d987b['quoted']['sender'])var _0x457413=_0x1d987b['quoted']['sender'];else{if(_0x1d987b['mentionedJid'])var _0x457413=_0x3cbe4e+'@s.whatsapp.net';}}}catch(_0x322225){}finally{_0x5dccec['groupParticipantsUpdate'](_0x1d987b['chat'],[_0x457413],'promote'),_0x5dccec['reply'](_0x1d987b['chat'],'*[\x20✅\x20]\x20ÓRDENES\x20RECIBIDAS*',_0x1d987b);}};handler['help']=['*593xxx*','*@usuario*','*responder\x20chat*']['map'](_0x72ad5e=>'promote\x20'+_0x72ad5e),handler['tags']=['group'],handler['command']=/^(promote|daradmin|darpoder)$/i,handler['admin']=!![],handler['botAdmin']=!![],handler['register']=!![],handler['group']=!![],handler['fail']=null;export default handler;