const handler=async(_0x1ec5bb,{conn:_0x5546f2,args:_0x3b0acd,usedPrefix:_0x2cc8d7,command:_0x129f98})=>{const _0x688880={'open':'not_announcement','close':'announcement','abierto':'not_announcement','cerrado':'announcement','abrir':'not_announcement','cerrar':'announcement'}[_0x3b0acd[0x0]||''];if(_0x688880===undefined)throw('[❗]\x20𝙵𝙾𝚁𝙼𝙰𝚃𝙾\x20𝙴𝚁𝚁𝙾𝙽𝙴𝙾!!\x0a\x0a❲\x20✨𝙴𝙹𝙴𝙼𝙿𝙻𝙾✨\x20❳\x0a'+(_0x2cc8d7+_0x129f98)+'\x20abrir*\x0a'+(_0x2cc8d7+_0x129f98)+'\x20cerrar*\x0a')['trim']();await _0x5546f2['groupSettingUpdate'](_0x1ec5bb['chat'],_0x688880);{_0x1ec5bb['reply']('*[\x20✔\x20]\x20𝙶𝚁𝚄𝙿𝙾\x20𝙲𝙾𝙽𝙵𝙸𝙶𝚄𝚁𝙰𝙳𝙾\x20𝙲𝙾𝚁𝚁𝙴𝙲𝚃𝙰𝙼𝙴𝙽𝚃𝙴*');}};handler['help']=['group\x20open\x20/\x20close','grupo\x20abrir\x20/\x20cerrar'],handler['tags']=['group'],handler['command']=/^(group|grupo)$/i,handler['admin']=!![],handler['botAdmin']=!![],handler['register']=!![],handler['group']=!![];export default handler;