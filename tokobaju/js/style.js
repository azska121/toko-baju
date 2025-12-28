const DEFAULT_PRODUCTS = [
      {id:1,title:'Kaos Basic Putih',group:'kaos-basic',price:79000,sizes:['S','M','L','XL'],color:'Putih',stock:50,img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyb5sEeYJZcKxEw-QGDN3lfvy2w23OQHpxfw&s',rating:4.4,badge:'Diskon 10%',release:'2025-03-01',reviews:[{user:'Alya',rating:5,text:'Bahan lembut, pas di badan',date:'2025-03-12'},{user:'Budi',rating:4,text:'Bagus, tapi agak panjang untuk ukuran S',date:'2025-04-01'}]},
      {id:2,title:'Kaos Polos Hitam',group:'kaos-basic',price:89000,sizes:['M','L','XL'],color:'Hitam',stock:50,img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwigK-Ek1kFXTQoXP8hQbf-2nFkm9XW7gJCA&s',rating:4.2,badge:'Diskon 5%',release:'2024-12-15',reviews:[{user:'Citra',rating:4,text:'Warna hitam pekat, nyaman',date:'2024-12-05'}]},
      {id:3,title:'Kemeja Flanel',price:149000,sizes:['M','L'],color:'Merah',stock:50,img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuWtCr7MRUGZC6pfUEsKvOwwR1Dd4MoFkvdA&s',rating:4.8,badge:'Best Seller',release:'2025-01-10',reviews:[{user:'Dedi',rating:5,text:'Hangat dan cocok buat musim hujan',date:'2025-01-20'},{user:'Eka',rating:5,text:'Potongan rapih, kualitas Oke',date:'2025-02-11'},{user:'Fajar',rating:4,text:'Sedikit tebal tapi nyaman',date:'2025-02-20'}]},
      {id:4,title:'Hoodie Navy',price:199000,sizes:['S','M','L','XL'],color:'Navy',stock:50,img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAidXjgNh7Z1NtjwSJ0azIsctcLdD3lPuxUQ&s',rating:4.6,badge:'Diskon 15%',release:'2025-02-05',reviews:[{user:'Gina',rating:5,text:'Hoodie favorit saya!',date:'2025-03-03'}]},
      {id:5,title:'Kaos Stripe',group:'kaos-stripe',price:129000,sizes:['S','M','L'],color:'Putih',stock:50,img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQypLXNqYQDfbyZ4_0mTNKthLSkY2yc7cFPQQ&s',rating:4.3,badge:'Diskon 10%',release:'2024-11-01',reviews:[{user:'Hendra',rating:4,text:'Motif stripe klasik',date:'2024-11-15'}]},
      {id:6,title:'Jaket Denim',price:249000,sizes:['M','L','XL'],color:'Navy',stock:50,img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb_CCHunn54CqThlzr3k82T52SSLYQ9Whf5g&s',rating:4.9,badge:'Best Seller',release:'2025-05-02',reviews:[{user:'Intan',rating:5,text:'Kualitas jahitan rapi dan kain tebal',date:'2025-05-02'},{user:'Joko',rating:5,text:'Worth the price',date:'2025-06-10'}]},
      {id:7,title:'Sweater Abu',price:159000,sizes:['S','M','L'],color:'abu',stock:50,img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR66zjMe3BBJg6I8_uu_vPbj9O7DnpsxZPojA&s',rating:4.1,badge:'',release:'2025-02-22',reviews:[{user:'Kiki',rating:4,text:'Hangat tapi agak tebal',date:'2025-02-22'}]},
      {id:8,title:'Polo Shirt',price:119000,sizes:['M','L','XL'],color:'Putih',stock:50,img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh_gz2XA8qtURd1sIwsrnUgjVpJB3uxR0G9g&s',rating:4.0,badge:'',release:'2025-01-05',reviews:[]},
      {id:9,title:'Celana Chino',price:179000,sizes:['S','M','L','XL'],color:'Coklat',stock:50,img:'https://tse4.mm.bing.net/th/id/OIP.nVdszCtmiFLd0XbFKsVicQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3',rating:4.5,badge:'Diskon 20%',release:'2025-03-15',reviews:[{user:'Lina',rating:5,text:'Nyaman dipakai sehari-hari',date:'2025-03-20'},{user:'Mira',rating:4,text:'Warna sesuai gambar',date:'2025-04-05'}]},
      {id:10,title:'Jaket Bomber',price:229000,sizes:['M','L'],color:'Hitam',stock:50,img:'https://media.karousell.com/media/photos/products/2023/8/4/shibuya_m4a1_premium_pilot_bom_1691121736_3b921b45',rating:4.7,badge:'Best Seller',release:'2025-04-10',reviews:[{user:'Nina',rating:5,text:'Stylish dan nyaman',date:'2025-04-15'},{user:'Oki',rating:4,text:'Agak mahal tapi kualitas oke',date:'2025-05-01'}]},
      {id:11,title:'Kaos Polos Abu',group:'kaos-basic',price:85000,sizes:['S','M','L','XL'],color:'Abu',stock:50,img:'https://cf.shopee.co.id/file/ce0bd21d7ec4e7a51cfdd2d68703f21c',rating:4.3,badge:'Diskon 5%',release:'2025-03-20',reviews:[{user:'Putu',rating:4,text:'Warna abu netral, cocok dipadupadankan',date:'2025-03-25'}]},
      {id:12,title:'Crewneck Hijau',price:165000,sizes:['S','M','L'],color:'Hijau',stock:50,img:'https://down-id.img.susercontent.com/file/id-11134207-7ra0u-mcvtmb4d05t03a',rating:4.4,badge:'Diskon 10%',release:'2025-02-28',reviews:[{user:'Rina',rating:5,text:'Warna hijau segar, bahan nyaman',date:'2025-03-05'}]}
    ];

    // load saved reviews from localStorage (persist)
    function loadProducts(){
      const saved = localStorage.getItem('modeease-products')
      if(saved){
        try{ const parsed = JSON.parse(saved); return parsed }
        catch(e){ return DEFAULT_PRODUCTS.slice() }
      }
      return DEFAULT_PRODUCTS.slice()
    }

    function saveProducts(products){ localStorage.setItem('modeease-products', JSON.stringify(products)) }

    const PRODUCTS = loadProducts()

    // set default stock jika belum ada
    PRODUCTS.forEach(p=>{
      if(p.stock == null) p.stock = 20;
    });

    // ensure rating reflects reviews
    PRODUCTS.forEach(p=>{
      if(p.reviews && p.reviews.length){
        const avg = p.reviews.reduce((s,r)=>s + (r.rating||0),0) / p.reviews.length
        p.rating = Math.round(avg*10)/10
      }
    })

    // Wishlist
    let wishlist = JSON.parse(localStorage.getItem('modeease-wishlist') || '[]');
    function saveWishlist(){
      localStorage.setItem('modeease-wishlist', JSON.stringify(wishlist));
    }
    function toggleWishlist(id){
      if(wishlist.includes(id)){
        wishlist = wishlist.filter(x=>x!==id);
        showToast('Dihapus dari favorit');
      }else{
        wishlist.push(id);
        showToast('Ditambahkan ke favorit');
      }
      saveWishlist();
      renderGrid();
      renderWishlist();
      renderBest();
    }
    function wishlistClick(e,id){
      e.stopPropagation();
      toggleWishlist(id);
    }

    // Voucher dinamis
    const VOUCHERS = [
      { code:'NWE10',  type:'percent', value:10,  minTotal:0,      label:'Diskon 10% pembelian pertama' },
      { code:'CAMPUS15', type:'percent', value:15, minTotal:200000, label:'Diskon 15% min. Rp 200.000' },
      { code:'SHIP15', type:'flat', value:15000, minTotal:100000,  label:'Potongan Rp 15.000 (ongkir)' }
    ];
    let activeVoucher = null;

    function findVoucher(code){
      return VOUCHERS.find(v => v.code.toUpperCase() === code.toUpperCase());
    }

    function calculateTotals(subtotal){
      if(!activeVoucher){
        return { subtotal, discount:0, total:subtotal, discountLabel:'' };
      }
      const v = activeVoucher;
      if(subtotal < v.minTotal){
        return { subtotal, discount:0, total:subtotal, discountLabel:'' };
      }
      let discount = 0;
      if(v.type === 'percent'){
        discount = Math.round(subtotal * v.value / 100);
      } else if(v.type === 'flat'){
        discount = v.value;
      }
      const total = Math.max(0, subtotal - discount);
      const discountLabel = `${v.code} (${v.label}) - ${formatIDR(discount)}`;
      return { subtotal, discount, total, discountLabel };
    }

    function applyVoucher(){
      const input = document.getElementById('voucherInput');
      const code = (input.value || '').trim();
      if(!code) return showToast('Masukkan kode voucher');

      const v = findVoucher(code);
      if(!v){
        activeVoucher = null;
        const labelEl = document.getElementById('discountLabel');
        if(labelEl) labelEl.textContent = 'Voucher tidak ditemukan';
        renderCart();
        return showToast('Kode voucher tidak valid');
      }
      activeVoucher = v;
      showToast('Voucher diterapkan: ' + v.code);
      renderCart();
    }

    // Restock subscription
    let restockSubs = JSON.parse(localStorage.getItem('modeease-restock') || '{}');

    function saveRestockSubs(){
      localStorage.setItem('modeease-restock', JSON.stringify(restockSubs));
    }

    function subscribeRestock(productId){
      const p = PRODUCTS.find(x=>x.id===productId);
      if(!p) return;
      const contact = prompt(`Masukkan email atau nomor WhatsApp untuk notifikasi restock "${p.title}"`);
      if(!contact) return;
      if(!restockSubs[productId]) restockSubs[productId] = [];
      restockSubs[productId].push(contact);
      saveRestockSubs();
      showToast('Berhasil disimpan. Kami akan kabari saat restock (simulasi).');
    }

    // Analytics internal
    let ANALYTICS = JSON.parse(localStorage.getItem('modeease-analytics') || '{"views":{},"adds":{},"checkout":0}');

    function saveAnalytics(){
      localStorage.setItem('modeease-analytics', JSON.stringify(ANALYTICS));
    }

    function trackView(productId){
      ANALYTICS.views[productId] = (ANALYTICS.views[productId] || 0) + 1;
      saveAnalytics();
    }

    function trackAdd(productId){
      ANALYTICS.adds[productId] = (ANALYTICS.adds[productId] || 0) + 1;
      saveAnalytics();
    }

    function trackCheckout(){
      ANALYTICS.checkout += 1;
      saveAnalytics();
    }

    function showAnalytics(){
      const topViews = Object.entries(ANALYTICS.views)
        .sort((a,b)=>b[1]-a[1])
        .slice(0,5)
        .map(([id,count])=>{
          const p = PRODUCTS.find(x=>x.id===Number(id));
          return `${p ? p.title : 'Produk '+id} - dilihat ${count}x`;
        }).join('\n');

      const topAdds = Object.entries(ANALYTICS.adds)
        .sort((a,b)=>b[1]-a[1])
        .slice(0,5)
        .map(([id,count])=>{
          const p = PRODUCTS.find(x=>x.id===Number(id));
          return `${p ? p.title : 'Produk '+id} - ditambahkan ${count}x`;
        }).join('\n');

      alert(`Ringkasan Analytics (local):
Checkout berhasil: ${ANALYTICS.checkout}x

Top Dilihat:
${topViews || '- belum ada data'}

Top Ditambahkan ke Keranjang:
${topAdds || '- belum ada data'}`);
    }

    // state
    let state = { products: PRODUCTS.slice(), q:'', size:'', color:'', cart:[] }

    // infinite scroll state
    const PAGE_SIZE = 6;
    let visibleCount = 0;
    let lastFiltered = [];

    // helpers
    function formatIDR(n){ return 'Rp ' + n.toLocaleString('id-ID') }
    function renderStars(r){ const full = Math.floor(r); const half = r-full>=0.5?1:0; return '★'.repeat(full) + (half? '✩':'') + '☆'.repeat(5-full-half) }

    // render grid with optional skeleton
    const grid = document.getElementById('grid')
    const countEl = document.getElementById('count')
    const queryText = document.getElementById('queryText')

    function showSkeleton(cols=6){
      grid.innerHTML='';
      for(let i=0;i<cols;i++){
        const box=document.createElement('div');
        box.style.padding='8px';
        box.innerHTML=`
          <div class='skeleton' style='height:180px;border-radius:12px;margin-bottom:10px'></div>
          <div style='display:flex;flex-direction:column;gap:6px'>
            <div class='skeleton' style='height:14px;width:60%'></div>
            <div class='skeleton' style='height:12px;width:40%'></div>
          </div>`;
        grid.appendChild(box)
      }
    }

    function getFilteredProducts(){
      return state.products.filter(p=>{
        if(state.q && !p.title.toLowerCase().includes(state.q.toLowerCase())) return false
        if(state.size && !p.sizes.includes(state.size)) return false
        if(state.color && p.color !== state.color) return false
        return true
      })
    }

    function createProductCard(p){
      const reviewCount = p.reviews ? p.reviews.length : 0;
      const avgRating = p.rating || (reviewCount? (p.reviews.reduce((s,r)=>s+r.rating,0)/reviewCount).toFixed(1) : 0);
      const snippet = reviewCount? p.reviews[0].text : 'Belum ada ulasan';
      const isFav = wishlist.includes(p.id);
      const card = document.createElement('article');
      card.className = 'card';
      card.innerHTML = `
        <div class='card-media'>
          ${p.badge?`<div class="badge">${p.badge}</div>`:''}
          ${p.stock<=5?`<div class="badge" style="top:40px;background:#e11d48">Sisa ${p.stock}</div>`:''}
          <img src="${p.img}" alt="${p.title}" />
          <div class='overlay-actions'>
            <div style='display:flex;gap:8px'>
              <button class='btn btn-ghost' onclick='quickView(${p.id})'>Quick View</button>
              <button class='btn btn-primary' onclick='quickAdd(${p.id})'>Tambah</button>
            </div>
            <button class='btn btn-ghost' onclick='wishlistClick(event,${p.id})'>${isFav?'♥':'♡'}</button>
          </div>
        </div>
        <div class='meta'>
          <h3 style='margin:0 0 4px 0'>${p.title}</h3>
          <div style='display:flex;justify-content:space-between;align-items:center'>
            <div class='price'>${formatIDR(p.price)}</div>
            <div style='font-size:13px;color:var(--muted)'>${p.color}</div>
          </div>
          <div style='display:flex;justify-content:space-between;align-items:center'>
            <div class='rating'>${renderStars(avgRating)} <span style='color:var(--muted);font-size:13px'>(${avgRating})</span></div>
            <div style='font-size:13px;color:var(--muted)'>${reviewCount} ulasan</div>
          </div>
          <div style='display:flex;justify-content:space-between;align-items:center;margin-top:4px;font-size:12px;color:var(--muted)'>
            <span>Stok: ${p.stock}</span>
            ${p.stock<=0 ? `<button class="btn btn-ghost" style="font-size:11px;padding:4px 8px" onclick="event.stopPropagation();subscribeRestock(${p.id})">Ingatkan saat restock</button>` : ''}
          </div>
          <div class='review-snippet'>"${snippet.length>60? snippet.slice(0,57)+'...':snippet}"</div>
        </div>`;
      return card;
    }

    function renderMore(){
      if(!lastFiltered || visibleCount>=lastFiltered.length) return;
      const slice = lastFiltered.slice(visibleCount, visibleCount+PAGE_SIZE);
      slice.forEach(p=>{
        const card = createProductCard(p);
        grid.appendChild(card);
      });
      visibleCount += slice.length;
    }

    function renderGrid(){
      showSkeleton(6);
      setTimeout(()=>{
        lastFiltered = getFilteredProducts();
        countEl.textContent = lastFiltered.length;
        queryText.textContent = state.q || 'semua produk';
        grid.innerHTML = '';
        visibleCount = 0;
        renderMore();
      },200);
    }

    // modal (detail + review form)
    const modalRoot = document.getElementById('modalRoot')
    function openModal(id){
      const pIndex = PRODUCTS.findIndex(x=>x.id===id)
      const p = PRODUCTS[pIndex]
      const variants = p.group
        ? PRODUCTS.filter(x => x.group === p.group)
        : [p];

      trackView(id);

      modalRoot.style.display = 'block'
      const reviewList = (p.reviews && p.reviews.length)? p.reviews.map(r=>`<div class='review-item'><strong>${r.user}</strong> — ${renderStars(r.rating)}<div style='color:var(--muted);font-size:13px'>${r.date}</div><div style='margin-top:6px'>${r.text}</div></div>`).join('') : '<div class="muted">Belum ada ulasan untuk produk ini.</div>'

      modalRoot.innerHTML = `
        <div class='modal-backdrop' onclick="closeModal(event)">
          <div class='modal' onclick='event.stopPropagation()'>
            <div class='content'>
              <div><img src='${p.img}' alt='${p.title}'/></div>
              <div class='info'>
                <h2 style='margin-top:0'>${p.title}</h2>
                <div style='color:var(--muted);margin-bottom:8px'>${formatIDR(p.price)}</div>
                <div style='margin-bottom:8px'>Warna: ${p.color}</div>
                <div style='margin-bottom:8px'>Stok tersisa: ${p.stock}</div>
                <div style='margin-bottom:8px'>Pilih Size:</div>
                <div class='chips' style='margin-bottom:12px'>${p.sizes.map(s=>`<div class="chip" onclick="selectSize('${s}')" data-size="${s}">${s}</div>`).join('')}</div>

                ${variants.length > 1 ? `
                  <div style='margin:10px 0'>
                    <div style='font-weight:600;font-size:13px;margin-bottom:4px'>Pilihan warna lain:</div>
                    <div style='display:flex;flex-wrap:wrap;gap:6px'>
                      ${variants.map(v=>`
                        <button class="chip" style="border-radius:999px;padding:6px 10px;${v.id===p.id ? 'background:var(--accent);color:#fff' : ''}" onclick="openModal(${v.id})">
                          ${v.color || 'Warna'} ${v.id===p.id ? '(ini)' : ''}
                        </button>
                      `).join('')}
                    </div>
                  </div>
                ` : ''}

                <div style='display:flex;gap:8px'>
                  <button class='btn btn-primary' onclick='addToCart(${p.id})'>Tambah ke Keranjang</button>
                  <button class='btn btn-ghost' onclick='closeModal()'>Tutup</button>
                </div>

                <div class='reviews-list' aria-label='Ulasan Produk'>
                  <h4 style='margin:8px 0 6px 0'>Ulasan (${p.reviews? p.reviews.length:0})</h4>
                  <div id='reviews-wrapper'>${reviewList}</div>

                  <div style='margin-top:10px;border-top:1px dashed rgba(2,6,23,0.04);padding-top:10px'>
                    <h4 style='margin:6px 0'>Tulis Ulasan</h4>
                    <div style='display:flex;gap:8px;align-items:center;margin-bottom:8px'>
                      <input id='reviewName' placeholder='Nama Anda' style='flex:1;padding:8px;border-radius:8px;border:1px solid rgba(2,6,23,0.06)' />
                    </div>
                    <div style='margin-bottom:8px'>
                      <div class='star-input' id='starInput' data-value='0' aria-label='Pilih rating'>
                        <span data-star='1'>☆</span><span data-star='2'>☆</span><span data-star='3'>☆</span><span data-star='4'>☆</span><span data-star='5'>☆</span>
                      </div>
                    </div>
                    <textarea id='reviewText' placeholder='Tulis pengalaman Anda...' style='width:100%;padding:8px;border-radius:8px;border:1px solid rgba(2,6,23,0.06);min-height:72px'></textarea>
                    <div style='display:flex;gap:8px;justify-content:flex-end;margin-top:8px'>
                      <button class='btn btn-ghost' onclick='clearReviewForm()'>Batal</button>
                      <button class='btn btn-primary' onclick='submitReview(${p.id})'>Kirim Ulasan</button>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>`

      // init star input listeners
      initStarInput()
      modalRoot.dataset.selectedSize = '' // wajib pilih size dulu
    }

    // Quick View modal (ringan)
    function quickView(id){
      const p = PRODUCTS.find(x=>x.id===id);
      if(!p) return;

      trackView(id);

      modalRoot.style.display='block';
      modalRoot.innerHTML = `
        <div class="modal-backdrop" onclick="closeModal(event)">
          <div class="modal" onclick="event.stopPropagation()" style="max-width:500px">
            <img src="${p.img}" alt="${p.title}" style="width:100%;height:280px;object-fit:cover"/>
            <div class="info" style="padding:16px">
              <h2 style="margin-top:0">${p.title}</h2>
              <div style="color:var(--muted);margin-bottom:8px">${formatIDR(p.price)}</div>
              <div style="margin-bottom:6px">Warna: ${p.color}</div>
              <div style="margin-bottom:6px;font-size:13px;color:var(--muted)">Stok tersisa: ${p.stock}</div>
              <div style="display:flex;gap:8px;margin-top:10px">
                <button class="btn btn-primary" onclick="openModal(${p.id})">Lihat Detail</button>
                <button class="btn btn-ghost" onclick="closeModal()">Tutup</button>
              </div>
            </div>
          </div>
        </div>`;
    }

    function initStarInput(){
      const el = document.getElementById('starInput')
      if(!el) return
      el.querySelectorAll('[data-star]').forEach(span=>{
        span.addEventListener('mouseover', ()=>{
          const n = Number(span.dataset.star)
          fillStars(n)
        })
        span.addEventListener('mouseout', ()=>{
          const v = Number(el.dataset.value) || 0
          fillStars(v)
        })
        span.addEventListener('click', ()=>{
          el.dataset.value = span.dataset.star
          fillStars(Number(span.dataset.star))
        })
      })
    }
    function fillStars(n){
      const el = document.getElementById('starInput'); if(!el) return;
      el.querySelectorAll('[data-star]').forEach(s=>{
        s.textContent = Number(s.dataset.star) <= n ? '★' : '☆'
      })
    }

    function clearReviewForm(){
      const el = document.getElementById('starInput');
      if(el) { el.dataset.value='0'; fillStars(0) }
      const name = document.getElementById('reviewName');
      const text = document.getElementById('reviewText');
      if(name) name.value='';
      if(text) text.value='';
    }

    function submitReview(productId){
      const nameEl = document.getElementById('reviewName')
      const textEl = document.getElementById('reviewText')
      const starEl = document.getElementById('starInput')
      if(!nameEl || !textEl || !starEl) return
      const name = nameEl.value.trim() || 'Pengguna'
      const text = textEl.value.trim()
      const rating = Number(starEl.dataset.value) || 0
      if(!text) return showToast('Tolong tulis ulasan Anda')
      if(rating<=0) return showToast('Pilih rating bintang')

      const pIndex = PRODUCTS.findIndex(p=>p.id===productId)
      if(pIndex === -1) return
      const now = new Date().toISOString().slice(0,10)
      const review = { user: name, rating, text, date: now }
      if(!PRODUCTS[pIndex].reviews) PRODUCTS[pIndex].reviews = []
      PRODUCTS[pIndex].reviews.unshift(review) // newest first
      // update avg rating
      const avg = PRODUCTS[pIndex].reviews.reduce((s,r)=>s + (r.rating||0),0) / PRODUCTS[pIndex].reviews.length
      PRODUCTS[pIndex].rating = Math.round(avg*10)/10

      // persist
      saveProducts(PRODUCTS)

      // update UI
      const wrapper = document.getElementById('reviews-wrapper')
      if(wrapper){
        wrapper.insertAdjacentHTML('afterbegin',
          `<div class='review-item'><strong>${review.user}</strong> — ${renderStars(review.rating)}<div style='color:var(--muted);font-size:13px'>${review.date}</div><div style='margin-top:6px'>${review.text}</div></div>`
        );
      }
      clearReviewForm()
      renderGrid(); renderBest(); renderWishlist()
      showToast('Terima kasih! Ulasan berhasil dikirim')
    }

    function closeModal(e){
      if(e && e.target && e.target.classList && e.target.classList.contains('modal-backdrop')){
        modalRoot.style.display='none'; modalRoot.innerHTML=''
      } else if(!e){
        modalRoot.style.display='none'; modalRoot.innerHTML=''
      }
    }
    function selectSize(s){
      modalRoot.dataset.selectedSize = s;
      modalRoot.querySelectorAll('.chip').forEach(el=>el.classList.toggle('active', el.dataset.size===s))
    }

    // cart
    function quickAdd(id){
      const p = PRODUCTS.find(x=>x.id===id);
      addToCart(id, p.sizes[0])
    }
    function addToCart(id, sizeArg){
      const p = PRODUCTS.find(x=>x.id===id)
      if(!p) return;

      trackAdd(id);

      const size = sizeArg || modalRoot.dataset.selectedSize || ''
     	if(!size){
        return showToast('Pilih ukuran terlebih dahulu');
      }
      if(p.stock<=0){
        return showToast('Stok habis untuk produk ini');
      }
      const key = id+'|'+size
      const exist = state.cart.find(i=>i.key===key)
      if(exist) exist.qty++
      else state.cart.push({key,id,title:p.title,price:p.price,size,qty:1,img:p.img})
      // kurangi stok
      if(p.stock>0) p.stock--;
      if(p.stock<=3){
        showToast('Stok terbatas, segera checkout ya!');
      }else{
        showToast('Produk ditambahkan ke keranjang');
      }
      renderCart(); renderGrid(); renderBest(); renderWishlist();
      closeModal()
    }
    function renderCart(){
      const root = document.getElementById('cartItems'); 
      root.innerHTML=''
      let subtotal=0;
      state.cart.forEach(ci=>{
        subtotal += ci.price*ci.qty;
        const div = document.createElement('div');
        div.style.display='flex';
        div.style.gap='8px';
        div.style.marginBottom='10px';
        div.innerHTML = `
          <img src="${ci.img}" style="width:64px;height:64px;object-fit:cover;border-radius:8px"/>
          <div style="flex:1">
            <div style="font-weight:600">${ci.title}</div>
            <div style="color:var(--muted);font-size:13px">Size: ${ci.size} • ${formatIDR(ci.price)}</div>
            <div style="font-size:13px;margin-top:6px">Jumlah: ${ci.qty}</div>
          </div>
          <div style="display:flex;flex-direction:column;gap:6px">
            <button onclick="changeQty('${ci.key}',1)" class="btn btn-ghost">+</button>
            <button onclick="changeQty('${ci.key}',-1)" class="btn btn-ghost">-</button>
            <button onclick="removeItem('${ci.key}')" class="btn" style="color:#ef4444">Hapus</button>
          </div>`;
        root.appendChild(div)
      })

      const totals = calculateTotals(subtotal);
      const subtotalEl = document.getElementById('subtotalPrice');
      if(subtotalEl) subtotalEl.textContent = formatIDR(totals.subtotal);
      const discountLabelEl = document.getElementById('discountLabel');
      if(discountLabelEl) discountLabelEl.textContent = totals.discountLabel || (activeVoucher ? 'Tidak memenuhi minimum' : '-');
      document.getElementById('totalPrice').textContent = formatIDR(totals.total);
      document.getElementById('cartCount').textContent = state.cart.reduce((s,i)=>s+i.qty,0)
    }
    function changeQty(key,delta){
      const it = state.cart.find(i=>i.key===key);
      if(!it) return;
      it.qty += delta;
      if(it.qty<=0) state.cart = state.cart.filter(i=>i.key!==key);
      renderCart()
    }
    function removeItem(key){
      state.cart = state.cart.filter(i=>i.key!==key); renderCart()
    }
    function toggleCart(show){
      document.getElementById('cartPanel').style.display = show ? 'block' : 'none'
    }

    // checkout form
    function showCheckoutForm(){
      if(state.cart.length===0) return showToast('Keranjang kosong!');
      modalRoot.style.display='block';
      modalRoot.innerHTML = `
        <div class="modal-backdrop" onclick="closeModal(event)">
          <div class="modal" onclick="event.stopPropagation()">
            <div class="info" style="padding:20px">
              <h2>Form Checkout</h2>
              <label>Nama</label>
              <input id="namaPembeli" style="width:100%;padding:8px;margin:6px 0;border-radius:8px;border:1px solid rgba(2,6,23,0.06)"/>
              <label>Alamat</label>
              <textarea id="alamatPembeli" style="width:100%;padding:8px;margin:6px 0;border-radius:8px;border:1px solid rgba(2,6,23,0.06)"></textarea>
              <label>Metode Pembayaran</label>
              <select id="metode" style="width:100%;padding:8px;margin:6px 0;border-radius:8px;border:1px solid rgba(2,6,23,0.06)">
                <option>Transfer Bank</option>
                <option>COD</option>
                <option>E-Wallet</option>
              </select>
              <select id="bank" style="width:100%;padding:8px;margin:6px 0;border-radius:8px;border:1px solid rgba(2,6,23,0.06);display:none">
                <option value="">-- Pilih Bank --</option>
                <option value="BRI" data-account="BRI - 1234567890 (a.n. Mode Ease)">Bank BRI</option>
                <option value="BCA" data-account="BCA - 9876543210 (a.n. Mode Ease)">Bank BCA</option>
                <option value="Mandiri" data-account="Mandiri - 5556667778 (a.n. Mode Ease)">Bank Mandiri</option>
              </select>
              <div id="paymentInfo" class="payment-info" style="display:none;margin-top:8px;padding:10px;border-radius:8px;background:var(--glass-2)"></div>
              <div style="margin-top:12px;display:flex;gap:8px;justify-content:flex-end">
                <button class="btn btn-ghost" onclick="closeModal()">Batal</button>
                <button class="btn btn-primary" onclick="confirmCheckout()">Konfirmasi</button>
              </div>
            </div>
          </div>
        </div>`;

      // init
      setTimeout(()=>{
        const metode = document.getElementById('metode'),
              bank = document.getElementById('bank'),
              info = document.getElementById('paymentInfo');
        function update(){
          if(metode.value==='Transfer Bank'){
            bank.style.display='block';
            const opt = bank.options[bank.selectedIndex];
            if(opt && opt.dataset && opt.dataset.account){
              info.style.display='block';
              info.innerHTML = `<strong>Silakan transfer ke:</strong><br>${opt.dataset.account}`
            } else { info.style.display='none' }
          } else if(metode.value==='E-Wallet'){
            bank.style.display='none'; bank.value='';
            info.style.display='block';
            info.innerHTML = `<strong>E-Wallet</strong><br>08123456789 (a.n. Mode Ease)`
          } else {
            bank.style.display='none'; bank.value='';
            info.style.display='none'
          }
        }
        metode.addEventListener('change', update)
        bank.addEventListener('change', update)
        const subtotal = state.cart.reduce((s,i)=>s + i.price*i.qty,0)
        const totals = calculateTotals(subtotal);
        const tnode = document.createElement('div');
        tnode.style.marginBottom = '8px';
        tnode.innerHTML = `<strong>Total: ${formatIDR(totals.total)}</strong><div class="muted" style="font-size:12px">Subtotal ${formatIDR(totals.subtotal)}${totals.discount ? ' • Diskon sudah termasuk' : ''}</div>`;
        document.querySelector('.info').prepend(tnode)
        update()
      },60)
    }

    // Checkout via WhatsApp
    function confirmCheckout(){
      const nama = document.getElementById('namaPembeli').value.trim();
      const alamat = document.getElementById('alamatPembeli').value.trim();
      const metode = document.getElementById('metode').value;
      const bank = document.getElementById('bank');
      if(!nama || nama.length<3) return showToast('Nama terlalu pendek');
      if(!alamat || alamat.length<10) return showToast('Alamat terlalu pendek');

      let detailMetode = '';
      if(metode==='Transfer Bank' && bank && bank.value){
        detailMetode = bank.options[bank.selectedIndex].dataset.account;
      } else if(metode==='E-Wallet') {
        detailMetode = 'E-Wallet - 08123456789';
      } else {
        detailMetode = 'COD (Bayar di tempat)';
      }

      const subtotal = state.cart.reduce((s,i)=>s + i.price*i.qty,0);
      const { discountLabel, total } = calculateTotals(subtotal);

      const itemsText = state.cart.map(i=>`- ${i.title} (Size: ${i.size}) x${i.qty} = ${formatIDR(i.price*i.qty)}`).join('\n');

      const message = 
`Halo Mode Ease, saya ingin melakukan pemesanan:

Nama: ${nama}
Alamat:
${alamat}

Pesanan:
${itemsText}

${discountLabel ? 'Promo: ' + discountLabel + '\n' : ''}Total: ${formatIDR(total)}

Metode Pembayaran: ${metode}
Detail: ${detailMetode}

Mohon konfirmasi ketersediaan stok ya. Terima kasih 🙏`;

      const phone = '6285175270845'; // nomor WA CS
      const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
      window.open(url, '_blank');

      trackCheckout();

      state.cart=[]; 
      renderCart(); 
      closeModal(); 
      toggleCart(false)
      showToast('Pesanan dikirim ke WhatsApp');
    }

    // UI interactions
    document.getElementById('filterToggle').addEventListener('click', ()=>{
      const f = document.getElementById('filters');
      const expanded = f.style.display === 'none' || getComputedStyle(f).display === 'none';
      f.style.display = expanded ? 'block' : 'none';
      document.getElementById('filterToggle').setAttribute('aria-expanded', expanded)
    })
    document.getElementById('cartBtn').addEventListener('click', ()=> toggleCart(true))

    // search + debounce
    const searchInput = document.getElementById('searchInput');
    let searchTimer;
    searchInput.addEventListener('input', e=>{
      clearTimeout(searchTimer);
      searchTimer = setTimeout(()=>{
        state.q = e.target.value;
        renderGrid();
      },250);
    });

    document.getElementById('sort').addEventListener('change', e=>{
      const v = e.target.value;
      if(v==='price-asc') state.products.sort((a,b)=>a.price-b.price);
      else if(v==='price-desc') state.products.sort((a,b)=>b.price-a.price);
      else if(v==='newest') state.products.sort((a,b)=> new Date(b.release||'2025-01-01') - new Date(a.release||'2025-01-01'));
      else state.products = PRODUCTS.slice();
      renderGrid()
    })

    // filters chips
    document.querySelectorAll('[data-size]').forEach(btn=>btn.addEventListener('click', e=>{
      const s = e.currentTarget.dataset.size;
      state.size = state.size===s ? '' : s;
      document.querySelectorAll('[data-size]').forEach(b=>b.classList.toggle('active', b.dataset.size===state.size));
      renderGrid()
    }))
    document.querySelectorAll('[data-color]').forEach(btn=>btn.addEventListener('click', e=>{
      const c = e.currentTarget.dataset.color;
      state.color = state.color===c ? '' : c;
      document.querySelectorAll('[data-color]').forEach(b=>b.classList.toggle('active', b.dataset.color===state.color));
      renderGrid()
    }))
    document.getElementById('clearFilters').addEventListener('click', ()=>{
      state.size=''; state.color='';
      document.querySelectorAll('.chip').forEach(b=>b.classList.remove('active'));
      renderGrid()
    })
    document.getElementById('applyFilters').addEventListener('click', ()=> renderGrid())



    // toast helper
    function showToast(msg, timeout=1600){
      const root = document.getElementById('toastRoot');
      root.style.display='block';
      root.innerHTML = `<div class='toast'>${msg}</div>`;
      setTimeout(()=>{ root.style.display='none'; root.innerHTML='' }, timeout)
    }
    function openPromo(){ showToast('Diskon 10% untuk pembelian pertama!') }

    // first-visit popup
    function showPopup(){
      if(!localStorage.getItem('modeease-first-visit')){
        document.getElementById('popup').style.display='flex';
        localStorage.setItem('modeease-first-visit','1')
      }
    }
    function closePopup(){ document.getElementById('popup').style.display='none' }

    function scrollToId(id){
      const el = document.getElementById(id);
      if(el) el.scrollIntoView({behavior:'smooth', block:'start'})
    }

    // render best sellers
    function renderBest(){
      const best=document.getElementById('best'); best.innerHTML='';
      PRODUCTS.filter(p=>p.rating>=4.6).forEach(p=>{
        const isFav = wishlist.includes(p.id);
        const card=document.createElement('article');
        card.className='card';
        card.innerHTML = `
          <div class='card-media'>
            ${p.badge?`<div class="badge">${p.badge}</div>`:''}
            ${p.stock<=5?`<div class="badge" style="top:40px;background:#e11d48">Sisa ${p.stock}</div>`:''}
            <img src='${p.img}' alt='${p.title}'/>
          </div>
          <div class='meta'>
            <h3 style='margin:0 0 4px 0'>${p.title}</h3>
            <div style='display:flex;justify-content:space-between;align-items:center'>
              <div class='price'>${formatIDR(p.price)}</div>
              <div style='font-size:13px;color:var(--muted)'>${p.color}</div>
            </div>
            <div style='display:flex;justify-content:space-between;align-items:center;gap:8px;margin-top:4px'>
              <div class='rating'>${renderStars(p.rating)} <span style='color:var(--muted);font-size:13px'>(${p.rating.toFixed(1)})</span></div>
              <div style='display:flex;gap:6px'>
                <button class='btn btn-ghost' onclick='quickView(${p.id})'>Quick</button>
                <button class='btn btn-primary' onclick='quickAdd(${p.id})'>Tambah</button>
                <button class='btn btn-ghost' onclick='wishlistClick(event,${p.id})'>${isFav?'♥':'♡'}</button>
              </div>
            </div>
          </div>`;
        best.appendChild(card)
      })
    }

  

    // infinite scroll listener untuk grid utama
    window.addEventListener('scroll', ()=>{
      const rect = grid.getBoundingClientRect();
      if(rect.bottom < window.innerHeight + 200){
        renderMore();
      }
    });

    // Chatbot
    const chatbotToggleEl = document.getElementById('chatbotToggle');
    const chatbotPanelEl = document.getElementById('chatbotPanel');
    const chatbotContentEl = document.getElementById('chatbotContent');

    function toggleChatbot(show){
      chatbotPanelEl.style.display = show ? 'block' : 'none';
    }

    chatbotToggleEl.addEventListener('click', ()=>{
      const isHidden = getComputedStyle(chatbotPanelEl).display === 'none';
      toggleChatbot(isHidden);
    });

    function chatbotAsk(type){
      let answer = '';
      if(type==='size'){
        answer = 'Untuk atasan, pilih ukuran yang biasa kamu pakai. Jika ragu, pilih 1 size lebih besar karena cutting cenderung slim fit.';
      } else if(type==='pengiriman'){
        answer = 'Pengiriman biasanya 2-4 hari kerja untuk area Jawa, dan 3-7 hari kerja untuk luar Jawa (tergantung ekspedisi).';
      } else if(type==='pembayaran'){
        answer = 'Saat ini kami mendukung Transfer Bank (BRI, BCA, Mandiri), COD di area tertentu, dan E-Wallet (OVO/DANA/Gopay).';
      } else if(type==='retur'){
        answer = 'Kamu bisa tukar size maksimal 3 hari setelah barang diterima, dengan kondisi tag masih utuh dan tidak bernoda.';
      }
      const p = document.createElement('p');
      p.style.marginTop = '10px';
      p.innerHTML = `<strong>Jawaban:</strong> ${answer}`;
      chatbotContentEl.appendChild(p);
      chatbotContentEl.scrollTop = chatbotContentEl.scrollHeight;
    }

    // Shortcut untuk analytics (Ctrl+Shift+A)
    window.addEventListener('keydown', (e)=>{
      if(e.ctrlKey && e.shiftKey && (e.key==='A' || e.key==='a')){
        e.preventDefault();
        showAnalytics();
      }
    });

    // expose small functions
    window.openModal=openModal;
    window.closeModal=closeModal;
    window.selectSize=selectSize;
    window.addToCart=addToCart;
    window.quickAdd=quickAdd;
    window.toggleCart=toggleCart;
    window.changeQty=changeQty;
    window.removeItem=removeItem;
    window.showCheckoutForm=showCheckoutForm;
    window.confirmCheckout=confirmCheckout;
    window.scrollToProducts = ()=>{ document.querySelector('.products').scrollIntoView({behavior:'smooth'}) }

    // init
    renderGrid();
    renderCart();
    renderBest();
    renderWishlist();
    showPopup();
    document.getElementById('searchInput').focus();

///ulasan///
// =======================
// REVIEW SYSTEM
// =======================

function loadReviews(){
  const reviews = JSON.parse(localStorage.getItem("modeease_reviews")) || [];
  const list = document.getElementById("reviewList");

  if(!list) return;

  list.innerHTML = "";

  if(reviews.length === 0){
    list.innerHTML = `<div class="muted">Belum ada ulasan.</div>`;
    return;
  }

  reviews.reverse().forEach(r => {
    const card = document.createElement("div");
    card.className = "card";
    card.style.padding = "16px";

    card.innerHTML = `
      <strong>${r.name}</strong>
      <div class="muted" style="font-size:13px">${r.product}</div>
      <div style="margin:6px 0;color:#f59e0b">
        ${"★".repeat(r.rating)}${"☆".repeat(5 - r.rating)}
      </div>
      <p style="margin:6px 0">${r.text}</p>
      <div class="muted" style="font-size:12px">${r.date}</div>
    `;

    list.appendChild(card);
  });
}

function submitReview(){
  const name = document.getElementById("reviewName").value.trim();
  const product = document.getElementById("reviewProduct").value.trim();
  const rating = document.getElementById("reviewRating").value;
  const text = document.getElementById("reviewText").value.trim();

  if(!name || !product || !rating || !text){
    alert("Lengkapi semua field ulasan.");
    return;
  }

  const reviews = JSON.parse(localStorage.getItem("modeease_reviews")) || [];

  reviews.push({
    name,
    product,
    rating:Number(rating),
    text,
    date:new Date().toLocaleDateString("id-ID")
  });

  localStorage.setItem("modeease_reviews", JSON.stringify(reviews));

  document.getElementById("reviewName").value = "";
  document.getElementById("reviewProduct").value = "";
  document.getElementById("reviewRating").value = "";
  document.getElementById("reviewText").value = "";

  loadReviews();
}

// load on page open
document.addEventListener("DOMContentLoaded", loadReviews);

