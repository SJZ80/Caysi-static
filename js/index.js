const clientes = [{
        name: 'AGD',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, corporis, eum commodi earum delectus, numquam aliquam ratione iste expedita enim pariatur quas. Fuga doloribus velit, dolore vel laborum qui deleniti incidunt praesentium id ipsa nisi maiores molestiae dignissimos eos quod fugiat vero tempore cumque magnam suscipit officia, quia corrupti eum!',
        reference: 'Referencia1 Tel 090090900'
    },
    {
        name: 'NIZA',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, corporis, eum commodi earum delectus, numquam aliquam ratione iste expedita enim pariatur quas. Fuga doloribus velit, dolore vel laborum qui deleniti incidunt praesentium id ipsa nisi maiores molestiae dignissimos eos quod fugiat vero tempore cumque magnam suscipit officia, quia corrupti eum!',
        reference: 'Referencia2 Tel 090090900'
    },
    {
        name: 'Louis Dreyfus Company',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, corporis, eum commodi earum delectus, numquam aliquam ratione iste expedita enim pariatur quas. Fuga doloribus velit, dolore vel laborum qui deleniti incidunt praesentium id ipsa nisi maiores molestiae dignissimos eos quod fugiat vero tempore cumque magnam suscipit officia, quia corrupti eum!',
        reference: 'Referencia3 Tel 090090900'
    },
    {
        name: 'Molino Cañuelas',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, corporis, eum commodi earum delectus, numquam aliquam ratione iste expedita enim pariatur quas. Fuga doloribus velit, dolore vel laborum qui deleniti incidunt praesentium id ipsa nisi maiores molestiae dignissimos eos quod fugiat vero tempore cumque magnam suscipit officia, quia corrupti eum!',
        reference: 'Referencia4 Tel 090090900'
    }

];

const objeto = document.getElementById('galery');
const modalTitle = document.getElementsByClassName('modal-title');
const modalBody = document.getElementsByClassName('modal-body');
const modalFooter = document.getElementsByClassName('modal-footer');

objeto.addEventListener("click", evento => {

    modalTitle[0].textContent = clientes[evento.target.id].name
    modalBody[0].textContent = clientes[evento.target.id].description
    modalFooter[0].innerHTML = `<p>${clientes[evento.target.id].reference}</p>`
    console.log(modalFooter[0].innerHTML);


}, false);