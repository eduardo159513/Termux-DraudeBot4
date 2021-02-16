exports.wait = () => {
        return `⌛ Comaçando o processo ⌛`
}

exports.timeEnd = () => {
        return `O tempo acabou`
}

exports.succsess = () => {
        return `✔️ Sucesso ✔️`
}

exports.levelon = () => {
        return `❬ ✔ ❭ *Leveling ativado*`
}

exports.levelnoton = () => {
        return `❬ X ❭  *Leveling desativado*`
}

exports.levelnol = () => {
        return `*SEU NIVEL AINDA É* 0 °-°`
}

exports.stick = () => {
        return `[❗] Falha, ocorreu um erro ao converter a imagem em um sticker ❌`
}

exports.Iv = () => {
        return `❌ Link inválido ❌`
}

exports.group = () => {
        return `[❗] Este comando só pode ser usado em grupos! ❌`
}

exports.ownerG = () => {
        return `[❗] Este comando só pode ser usado pelo dono do grupo! ❌`
}

exports.ownerB = () => {
        return `[❗] Este comando só pode ser usado pelo dono do bot! ❌`
}

exports.admin = () => {
        return `[❗] Este comando só pode ser usado pelos admins do grupo! ❌`
}

exports.Badmin = () => {
        return `[❗] Este comando só pode ser usado quando o bot ser admin do grupo! ❌`
}

exports.daftarB = (prefix) => {
        return `*──「 AINDA NÃO REGISTRADO 」──*\n\n*Você não se registrou ainda, se registre primeiro...* \n\n*Comando : ${prefix}register nome|idade* \n*Exemplo : ${prefix}register Naruto|16*`
}

exports.daftarD = () => {
        return `*「 REGISTRADO 」*\n\n*Você se registrou no banco de dados do bot*`
}

exports.wrongf = () => {
        return`*Formato incorreto / Texto em branco*`
}

exports.clears = () => {
        return`*Limpeza completa com sucesso!*`
}

exports.pc = () => {
        return`*「 REGISTRAÇÃO 」*\n\nPara saber se você já se cadastrou, verifique a mensagem que enviei \n\nNOTA:\n*se você não entendeu a mensagem. significa que você não salvou o número do seu bot*`
}

exports.registered = (namaUser, umurUser, serialUser, time, sender) => {
        return`*「 REGISTRO DE DADOS 」*\n\nVocê se registrou com os dados \n\n◪ *DADOS* \n  │ \n  ├─ ❏ Nome : ${namaUser} \n  ├─ ❏ Número : wa.me/${sender.split("@")[0]} \n  ├─ ❏ Idade : ${umurUser} \n  ├─ ❏ Tempo registrado : ${time} \n  │ \n └─ ❏ NS : ${serialUser} \n\n ❏ NOTA : \nNÃO SE ESQUEÇA DESSE NÚMERO PORQUE ELE É IMPORTATE :v`
}

exports.cmdnf = (prefix, command) => {
        return`command *${prefix}${command}* não encontrado \ tente escrever *${prefix}menu*`
}

exports.owneresce = (pushname) => {
        return`*Desculpe, mas ${pushname} não é o dono do script*`
}

exports.limitend = (pushname) => {
        return`*Desculpe ${pushname} Seu limite de hoje acabou*\n*O limite é zerado a cada 24:00 horas*`
}

exports.limitcount = (limitCounts) => {
        return`
*「 CONTAGEM LIMITE 」*
o resto do seu limite : ${limitCounts}

NOTA : para aumentar o limite você pode conseguir passando de nível ou comprando limites`
}

exports.satukos = () => {
        return`*Adicione os parâmetros 1 (ativar) ou 0 (desativar)`
}

exports.uangkau = (pushname, sender, uangkau) => {
        return`◪ *ATM*\n  ❏ *Nome* : ${pushname}\n  ❏ *Número* : ${sender.split("@")[0]}\n  ❏ *Dinheiro* : ${uangkau}`
}
