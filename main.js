const add = (imgLocation, name, price) => {
    const item = document.createElement('div');
    item.className = 'item';
    item.setAttribute('data-aos', "fade-up");

    const img = document.createElement('img');
    img.src = imgLocation;
    img.loading = "lazy";

    const des = document.createElement('div');
    des.className = "description";

    const title = document.createElement('div');
    title.textContent = name.toUpperCase();
    title.className = "title";

    const div = document.createElement('div');

    const span = document.createElement('span');
    span.textContent = price;

    const sup = document.createElement('sup');
    sup.textContent = 'đ';

    div.appendChild(span);
    div.appendChild(sup);

    item.appendChild(img);
    item.appendChild(des);
    des.appendChild(title);
    des.appendChild(div);

    document.querySelector('.container').appendChild(item);
}

const products = [
    {
        "img": "https://bizweb.dktcdn.net/thumb/large/100/302/551/products/compressed-cropped-resized-na-2110-4-182-20467-1.jpg?v=1642023537000",
        "name": "TR WHITE FEATHER FEATHER FEATHER",
        "price": "250.000"
    },
    {
        "img": "https://bizweb.dktcdn.net/thumb/large/100/302/551/products/compressed-cropped-resized-na-2110-4-181-20435-1.jpg?v=1642015963000",
        "name": "TR DAISY GEM OXIDIZE",
        "price": "270.000"
    },
    {
        "img": "https://bizweb.dktcdn.net/thumb/large/100/302/551/products/compressed-cropped-resized-td-2110-4-225-20458-1.jpg?v=1642023754000",
        "name": "TR BUG LINE",
        "price": "250.000"
    },
    {
        "img": "https://bizweb.dktcdn.net/thumb/large/100/302/551/products/compressed-cropped-resized-td-2110-4-226-20475-1.jpg?v=1642023794000",
        "name": "TR MAI FLOWER",
        "price": "270.000"
    },
    {
        "img": "https://bizweb.dktcdn.net/thumb/large/100/302/551/products/compressed-cropped-resized-td-2110-4-224-20469-1.jpg?v=1642023720000",
        "name": "TR TINY BUTTERFLY LINE OXIDIZE",
        "price": "250.000"
    },
    {
        "img": "https://bizweb.dktcdn.net/thumb/large/100/302/551/products/compressed-resized-na-2101-4-063-20416-1.jpg?v=1640165255000",
        "name": "TR DOLPHIN UP",
        "price": "290.000"
    },
    {
        "img": "https://bizweb.dktcdn.net/thumb/large/100/302/551/products/dsc5431-1-copy.jpg?v=1599239113000",
        "name": "R MIDI LINE HEART",
        "price": "250.000"
    },
    {
        "img": "https://bizweb.dktcdn.net/thumb/large/100/302/551/products/dsc5532-1-copy-2.jpg?v=1599241354000",
        "name": "R MIDI CURVE BAR GEM",
        "price": "270.000"
    },
    {
        "img": "https://bizweb.dktcdn.net/thumb/large/100/302/551/products/sapo-cropped-dsc5433-1-copy-429cf560-8d43-4439-a303-1cdfe5bc857b.jpg?v=1599343398000",
        "name": "R MIDI LITTLE HEART GEM 2",
        "price": "290.000"
    },
    {
        "img": "https://bizweb.dktcdn.net/thumb/large/100/302/551/products/dsc5444-3-copy.jpg?v=1599343980000",
        "name": "R MIDI LITTLE HEART GEM 1",
        "price": "270.000"
    },
    {
        "img": "https://bizweb.dktcdn.net/thumb/large/100/302/551/products/dsc5472-1-copy.jpg?v=1599239873000",
        "name": "R MIDI DOUBLE BUTTEFLY",
        "price": "300.000"
    },
    {
        "img": "https://bizweb.dktcdn.net/thumb/large/100/302/551/products/dsc5490-1-copy.jpg?v=1599240019000",
        "name": "R MIDI CROSS",
        "price": "230.000"
    },
    {
        "img": "https://bizweb.dktcdn.net/thumb/large/100/302/551/products/dsc5518-1-copy.jpg?v=1599240621000",
        "name": "R MIDI OPEN LEAF",
        "price": "300.000"
    },
    {
        "img": "https://bizweb.dktcdn.net/thumb/large/100/302/551/products/dsc5466-1-copy.jpg?v=1599239851000",
        "name": "R MIDI BIG FLAT ROCK",
        "price": "350.000"
    },
    {
        "img": "https://bizweb.dktcdn.net/thumb/large/100/302/551/products/dsc5483-1-copy.jpg?v=1599239976000",
        "name": "R MIDI DOUBLE STRAIGHT LINE",
        "price": "390.000"
    },
    {
        "img": "https://bizweb.dktcdn.net/thumb/large/100/302/551/products/dsc5545-1-copy.jpg?v=1599242092000",
        "name": "R MIDI LITTLE BUBBLE HEART",
        "price": "270.000"
    },
    {
        "img": "https://bizweb.dktcdn.net/thumb/large/100/302/551/products/sapo-cropped-dsc5458-1-copy.jpg?v=1599343011000",
        "name": "R MIDI TRIPLE GEM",
        "price": "350.000"
    },
    {
        "img": "https://bizweb.dktcdn.net/thumb/large/100/302/551/products/sapo-cropped-dsc5509-4-copy.jpg?v=1599335945000",
        "name": "R MIDI BIG HEART GEM TWIST",
        "price": "300.000"
    },
    {
        "img": "https://bizweb.dktcdn.net/thumb/large/100/302/551/products/sapo-cropped-dsc5427-1-copy.jpg?v=1599374397000",
        "name": "R MIDI DRAGONFLY AND DROP GEM",
        "price": "550.000"
    },
    {
        "img": "https://bizweb.dktcdn.net/thumb/large/100/302/551/products/dsc5504-1-copy.jpg?v=1599240253000",
        "name": "R MIDI LOTUS",
        "price": "350.000"
    },
    {
        "img": "https://bizweb.dktcdn.net/thumb/large/100/302/551/products/dsc5479-1-copy.jpg?v=1599239955000",
        "name": "R MIDI LIZZARD",
        "price": "390.000"
    },
    {
        "img": "https://bizweb.dktcdn.net/thumb/large/100/302/551/products/dsc5527-1-copy.jpg?v=1599241195000",
        "name": "R MIDI ADN RING",
        "price": "270.000"
    },
    {
        "img": "https://bizweb.dktcdn.net/thumb/large/100/302/551/products/dsc5343-1-copy.jpg?v=1599220192000",
        "name": "TR BRAIDED",
        "price": "230.000"
    },
    {
        "img": "https://bizweb.dktcdn.net/thumb/large/100/302/551/products/dsc5524-1-copy.jpg?v=1599241121000",
        "name": "R MIDI MIDDLE TWIST TRIPLE LINE",
        "price": "490.000"
    },
    {
        "img": "https://bizweb.dktcdn.net/thumb/large/100/302/551/products/dsc5354-1-copy.jpg?v=1599220430000",
        "name": "TR FEATHER OXIDIZE",
        "price": "270.000"
    },
    {
        "img": "https://bizweb.dktcdn.net/thumb/large/100/302/551/products/dsc5374-1-copy.jpg?v=1599237124000",
        "name": "TR FLOWER OXIDIZE",
        "price": "270.000"
    },
    {
        "img": "https://bizweb.dktcdn.net/thumb/large/100/302/551/products/dsc5403-1-copy-2.jpg?v=1599508447000",
        "name": "TR WING GEM",
        "price": "270.000"
    },
    {
        "img": "https://bizweb.dktcdn.net/thumb/large/100/302/551/products/dsc5461-1-copy.jpg?v=1599239565000",
        "name": "R MIDI WHITE GEM RAIN DROP",
        "price": "350.000"
    },
    {
        "img": "https://bizweb.dktcdn.net/thumb/large/100/302/551/products/dsc5442-1-copy.jpg?v=1599239379000",
        "name": "R MIDI BLACK GEM RAIN DROP",
        "price": "350.000"
    },
    {
        "img": "https://bizweb.dktcdn.net/thumb/large/100/302/551/products/sapo-cropped-dsc5552-4-copy.jpg?v=1599335789000",
        "name": "R MIDI DOUBLE FLOWER GEM",
        "price": "490.000"
    },
    {
        "img": "https://bizweb.dktcdn.net/thumb/large/100/302/551/products/dsc5376-1-copy.jpg?v=1599296920000",
        "name": "TR DAISY OXIDIZE",
        "price": "290.000"
    },
    {
        "img": "https://bizweb.dktcdn.net/thumb/large/100/302/551/products/dsc5378-1-copy.jpg?v=1599237183000",
        "name": "TR DOUBLE LINE",
        "price": "250.000"
    },
    {
        "img": "https://bizweb.dktcdn.net/thumb/large/100/302/551/products/dsc5392-1-copy.jpg?v=1599237471000",
        "name": "TR BIG CHAIN OXIDIZE",
        "price": "290.000"
    },
    {
        "img": "https://bizweb.dktcdn.net/thumb/large/100/302/551/products/dsc5435-1-copy.jpg?v=1599239231000",
        "name": "R MIDI OPEN FOX",
        "price": "350.000"
    },
    {
        "img": "https://bizweb.dktcdn.net/thumb/large/100/302/551/products/dsc5423-1-copy.jpg?v=1599239025000",
        "name": "TR CROWN SLEEK",
        "price": "250.000"
    },
    {
        "img": "https://bizweb.dktcdn.net/thumb/large/100/302/551/products/dsc5476-1-copy.jpg?v=1599239934000",
        "name": "R MIDI BLACK GEM LINE",
        "price": "350.000"
    },
    {
        "img": "https://bizweb.dktcdn.net/thumb/large/100/302/551/products/sapo-cropped-dsc5520-4-copy.jpg?v=1599335917000",
        "name": "R MIDI TINY HEART GEM",
        "price": "270.000"
    },
    {
        "img": "https://bizweb.dktcdn.net/thumb/large/100/302/551/products/dsc5451-1-copy.jpg?v=1599239485000",
        "name": "R MIDI DOUBLE BIG LEAF",
        "price": "350.000"
    },
    {
        "img": "https://bizweb.dktcdn.net/thumb/large/100/302/551/products/beo-5721-1.jpg?v=1586323431000",
        "name": "R MIDI FLAT TINY",
        "price": "350.000"
    },
    {
        "img": "https://bizweb.dktcdn.net/thumb/large/100/302/551/products/beo-5737-1.jpg?v=1586323697000",
        "name": "R MIDI FLAT GIANT",
        "price": "490.000"
    },
    {
        "img": "https://bizweb.dktcdn.net/thumb/large/100/302/551/products/beo-5788-1.jpg?v=1586368107000",
        "name": "TR ONLY BIG DAISY FLOWER",
        "price": "250.000"
    },
    {
        "img": "https://bizweb.dktcdn.net/thumb/large/100/302/551/products/beo-5774-1.jpg?v=1586367916000",
        "name": "TR ROCK OXIDIZE",
        "price": "250.000"
    },
    {
        "img": "https://bizweb.dktcdn.net/thumb/large/100/302/551/products/beo-5781-1.jpg?v=1586367996000",
        "name": "TR SUN MOON STAR",
        "price": "250.000"
    },
    {
        "img": "https://bizweb.dktcdn.net/thumb/large/100/302/551/products/compressed-cropped-resized-td-20-03-4-003-20447-1.jpg?v=1642023682000",
        "name": "TR DOT LINE",
        "price": "250.000"
    },
    {
        "img": "https://bizweb.dktcdn.net/thumb/large/100/302/551/products/beo-5786-1.jpg?v=1586368072000",
        "name": "TR MULTI BIG DOT",
        "price": "230.000"
    },
    {
        "img": "https://bizweb.dktcdn.net/thumb/large/100/302/551/products/beo-5725-1.jpg?v=1586323478000",
        "name": "R INDI WHITE MOON STONE V BALL LINE",
        "price": "590.000"
    },
    {
        "img": "https://bizweb.dktcdn.net/thumb/large/100/302/551/products/beo-5745-1.jpg?v=1586324166000",
        "name": "R INDI LABRADORITE BROWN GREY V BALL LINE",
        "price": "590.000"
    },
    {
        "img": "https://bizweb.dktcdn.net/thumb/large/100/302/551/products/beo-5741-1.jpg?v=1586324069000",
        "name": "R INDI TIGER EYE YELLOW CIRCLE SMALL",
        "price": "590.000"
    },
    {
        "img": "https://bizweb.dktcdn.net/thumb/large/100/302/551/products/beo-5749-1.jpg?v=1586324229000",
        "name": "R INDI GREEN CHALCEDONY STONE V BALL LINE",
        "price": "590.000"
    },
    {
        "img": "https://bizweb.dktcdn.net/thumb/large/100/302/551/products/beo-5753-1.jpg?v=1586324295000",
        "name": "R INDI PINK TOURMALINE V BALL LINE",
        "price": "590.000"
    },
    {
        "img": "https://bizweb.dktcdn.net/thumb/large/100/302/551/products/beo-5760-1.jpg?v=1586324367000",
        "name": "R INDI LABRADORITE BROWN GREY STONE TINY BALL LINE",
        "price": "590.000"
    },
    {
        "img": "https://bizweb.dktcdn.net/thumb/large/100/302/551/products/beo-5764-1.jpg?v=1586324440000",
        "name": "R INDI PINK TOURMALINE STONE TINY BALL LINE",
        "price": "590.000"
    },
    {
        "img": "https://bizweb.dktcdn.net/thumb/large/100/302/551/products/beo-5733-1.jpg?v=1586323562000",
        "name": "R INDI TIGER EYE STONE TINY BALL LINE",
        "price": "590.000"
    },
    {
        "img": "https://bizweb.dktcdn.net/thumb/large/100/302/551/products/beo-5756-1.jpg?v=1586324324000",
        "name": "R INDI WHITE MOON  STONE TINY BALL LINE",
        "price": "590.000"
    },
    {
        "img": "https://bizweb.dktcdn.net/thumb/large/100/302/551/products/beo-5727-1.jpg?v=1586323522000",
        "name": "R INDI SMALL BLACk ONYX V BALL LINE",
        "price": "590.000"
    },
    {
        "img": "https://bizweb.dktcdn.net/thumb/large/100/302/551/products/beo-5747-1.jpg?v=1586324191000",
        "name": "R INDI BLACK ONYX STONE TINY BALL LINE",
        "price": "590.000"
    }
]

products.forEach((item, index) => {
    if (index < 30) add(item.img, item.name, item.price);
})

const swiper = new Swiper(".mySwiper", {
    pagination: {
        el: ".swiper-pagination",
    },
});

AOS.init({
    duration: 300
});