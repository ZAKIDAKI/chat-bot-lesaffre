// const connection=require("./database/connect")


// // let produits=["Ibis platinium","Magimix rouge","Magimix pré-poussé surgelé","Magimix Soft"," Ibis Bleu","Levure Jaouda Fraiche"]
// let produits=[
//         {
//             title:"Ibis platinium",
//             description:"Ibis Platinium est un améliorant de panification 2 en 1 destiné à tous types de pain. Il permet de remplacer la quantité du sucre ajouté à la farine, renforcer la tolérance de la pâte et donner un meilleur volume.Ibis platinium pour un pain sans sucre ajouté"
//         },
//         {
//             title:"Magimix rouge",
//             description:"Magimix Rouge, est l'améliorant de panification spécialement destiné à la production de viennoiseries (petits pains au chocolat, croissants, brioches…) et pains spéciaux (pains de campagne, pains aux céréales…). Il convient à tous types de process : Artisanal et industriel."
//         },
//         {
//             title:"Magimix pré-poussé surgelé",
//             description:"Magimix pré-poussé surgelé, est un améliorant complet, spécifiquement adapté à la fabrication de produits pré-fermentés surgelés : baguettes, viennoiseries feuilletés et pizzas. Magimix pré-poussé surgelé,est la garantie d’une pâte avec une conservation optimale en chambre froide, un feuilletage stable, un bon développement au four et des produits finis croustillants de haute qualité!"
//         },
//         {
//             title:"Magimix Soft",
//             description:"Magimix Soft, est un complément moelleux particulièrement efficace, spécialement développé pour apporter un moelleux extraordinaire à vos produits de panification. Magimix Jaune, pour une texture souple et moelleuse, et une meilleure conservation des produits !"
//         },
//         {
//             title:"Ibis Bleu",
//             description:"Ibis bleu est l'améliorant de panification destiné à tous types de pain. Il renforce la tolérance de la pâte et lui confère un meilleur volume. Ses performances recoonus facilitent au quotidien le travail du boulanger et permettent d'accroître la satisfaction des consommateurs."
//         },
//     ]



// produits.map((produit)=>{
//     let sql="INSERT INTO products (title,description) values(?,?)"
//     connection.query(sql,[produit.title,produit.description],(errros,results) => {
//         if(errros) console.log(errros)
//     })

// })

const message = {
    to: '212719927588',
    from: '212621586010',
    channel: 'whatsapp',
    message_uuid: '6d11996a-9767-4a3e-bdbb-eab155b36fc7',
    timestamp: '2023-11-09T12:38:45Z',
    message_type: 'reply',
    reply: {
      id: 'option9',
      title: ' ',
      description: '📍 9- Où nous trouver : '
    },
    context_status: 'available',
    context: {
      message_from: '212719927588',
      message_uuid: 'cd7f7fbf-bf82-4958-a04a-b595c3e37582'
    },
    profile: { name: 'Zakaria MOUCHTATI' }
  }

  console.log(JSON.stringify(message))