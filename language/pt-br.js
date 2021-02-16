exports.noregis = () => {
        return `*──「 AINDA NÃO REGISTRADO 」──*\n\n*Você não se registrou ainda, se registre primeiro...* \n\n*Comando : ${prefix}register nome|idade* \n*Exemplo : ${prefix}register Naruto|16*`
}

exports.rediregis = () => {
        return `*「 REGISTRADO 」*\n\n*Você se registrou no banco de dados do bot*`
}

exports.wrongf = () => {
        return`*Formato incorreto / Texto em branco*`
}

exports.clears = () => {
        return`*Limpeza completa com sucesso!*`
}

exports.pc = () => {
        return`*「 REGISTRAÇÃO 」*\n\nPara saber se você já se cadastrou, verifique a mensagem que enviei \n\nNOTE:\n*se você não entendeu a mensagem. significa que você não salvou o número do seu bot*`
}

exports.registered = (namaUser, umurUser, serialUser, time, sender) => {
        return`*「 REGISTRO DE DADOS 」*\n\nVocê se registrou com os dados \n\n◪ *DADOS* \n  │ \n  ├─ ❏ Nome : ${namaUser} \n  ├─ ❏ Número : wa.me/${sender.split("@")[0]} \n  ├─ ❏ Idade : ${umurUser} \n  ├─ ❏ Tempo de registro : ${time} \n  │ \n └─ ❏ NS : ${serialUser} \n\n ❏ NOTA : \nNÃO ESQUEÇA ESTE NÚMERO PORQUE É IMPORTANTE XD`
}

exports.cmdnf = (prefix, command) => {
        return`command *${prefix}${command}* não encontrado \ tente escrever *${prefix}menu*`
}

exports.owneresce = (pushname) => {
        return`*Desculpe, mas ${pushname} não é o do dono script*`
}

exports.limitend = (pushname) => {
        return`*Desculpe ${pushname} Seu limite de hoje acabou*\n*O limite é zerado a cada 24:00 horas*`
}

exports.limitcount = (limitCounts) => {
        return`
*「 CONTAGEM LIMITE 」*
o resto do seu limite : ${limitCounts}

NOTA : para aumentar o limite você pode passar de nível ou comprar limite`
}

exports.satukos = () => {
        return`*Adicione os  parâmetros 1/habilitar ou 0/desabilitar`
}

exports.uangkau = (pushname, sender, uangkau) => {
        return`◪ *ATM*\n  ❏ *Nome* : ${pushname}\n  ❏ *Número´* : ${sender.split("@")[0]}\n  ❏ *Dinheiro* : ${uangkau}`
}
