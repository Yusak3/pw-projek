let totalItem = 0;
let totalHarga = 0;

const tombolBeli = document.querySelectorAll('.buy-btn');

tombolBeli.forEach(button => {
    button.addEventListener('click', function (event) {
        event.preventDefault();

        const form = this.closest('form');
        const harga = parseInt(form.querySelector('.harga').value, 10);
        const qty = parseInt(form.querySelector('.quantity-input').value, 10);
        const subtotal = harga * qty;

        totalItem += qty;
        totalHarga += subtotal;

        document.getElementById('item').textContent = totalItem;
        document.getElementById('harga').textContent = totalHarga.toLocaleString('id-ID');
    });
});