let handler=async(_0x44c99e,{conn:_0x5d2613,participants:_0x31bac3,usedPrefix:_0x257cf9,command:_0x544e64})=>{let _0x2388c6={'key':{'participants':'0@s.whatsapp.net','remoteJid':'status@broadcast','fromMe':![],'id':'Halo'},'message':{'contactMessage':{'vcard':'BEGIN:VCARD\x0aVERSION:3.0\x0aN:Sy;Bot;;;\x0aFN:y\x0aitem1.TEL;waid='+_0x44c99e['sender']['split']('@')[0x0]+':'+_0x44c99e['sender']['split']('@')[0x0]+'\x0aitem1.X-ABLabel:Ponsel\x0aEND:VCARD'}},'participant':'0@s.whatsapp.net'};if(!global['db']['data']['settings'][_0x5d2613['user']['jid']]['restrict'])return _0x5d2613['reply'](_0x44c99e['chat'],'[\x20⚠️\x20]\x20𝙴𝙻\x20𝙾𝚆𝙽𝙴𝚁\x20𝚃𝙸𝙴𝙽𝙴\x20𝚁𝙴𝚂𝚃𝚁𝙸𝙽𝙶𝙸𝙳𝙾\x20(𝚎𝚗𝚊𝚋𝚕𝚎\x20𝚛𝚎𝚜𝚝𝚛𝚒𝚌𝚝\x20/\x20𝚍𝚒𝚜𝚊𝚋𝚕𝚎\x20𝚛𝚎𝚜𝚝𝚛𝚒𝚌𝚝)\x20𝙴𝙻\x20𝚄𝚂𝙾\x20𝙳𝙴\x20𝙴𝚂𝚃𝙴\x20𝙲𝙾𝙼𝙰𝙽𝙳𝙾',_0x2388c6,_0x44c99e);let _0x18ba85='[❗]\x20𝙴𝚃𝙸𝚀𝚄𝙴𝚃𝙴\x20𝙰\x20𝚄𝙽𝙰\x20𝙿𝙴𝚁𝚂𝙾𝙽𝙰\x20𝙾\x20𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙰\x20𝙰\x20𝚄𝙽\x20𝙼𝙴𝙽𝚂𝙰𝙹𝙴\x20𝙳𝙴𝙻\x20𝙶𝚁𝚄𝙿𝙾\x20𝙿𝙰𝚁𝙰\x20𝙴𝙻𝙸𝙼𝙸𝙽𝙰𝚁\x20𝙰𝙻\x20𝚄𝚂𝚄𝙰𝚁𝙸𝙾\x0a\x0a—◉\x20𝙴𝙹𝙴𝙼𝙿𝙻𝙾:\x0a'+(_0x257cf9+_0x544e64)+'\x20@'+global['suittag'];if(!_0x44c99e['mentionedJid'][0x0]&&!_0x44c99e['quoted'])return _0x44c99e['reply'](_0x18ba85,_0x44c99e['chat'],{'mentions':_0x5d2613['parseMention'](_0x18ba85)});let _0x56a604=_0x44c99e['mentionedJid'][0x0]?_0x44c99e['mentionedJid'][0x0]:_0x44c99e['quoted']['sender'],_0xbd6f37=_0x44c99e['chat']['split']`-`[0x0];await _0x5d2613['groupParticipantsUpdate'](_0x44c99e['chat'],[_0x56a604],'remove');};handler['command']=/^(kick|echar|hechar|sacar)$/i,handler['admin']=!![],handler['botAdmin']=!![],handler['register']=!![],handler['group']=!![];export default handler;