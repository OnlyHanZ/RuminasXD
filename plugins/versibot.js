let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
     πππ«π¬π’πΌπ§ 3.05
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', ' *Version BoT* ', 'status@broadcast')
}
handler.help = ['versibot']
handler.tags = ['info']
handler.command = /^(versibot)$/i

export default handler
