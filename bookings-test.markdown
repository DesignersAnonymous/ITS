---
title: Book Now
permalink: "/book-test/"
layout: booking
---

<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=AW-775129001"></script>
<script>
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'AW-775129001');
</script>

<section id="book-now">
    <h1>{{ page.title }}</h1>

    <div class="booking-buttons">
        {% for button in site.data.book-now.buttons %}
        <a href="{{ button.link }}" class="btn">{{ button.label }}</a>
        {% endfor %}
    </div>

    <div class="booking-platform">
        <p>Booking platform integration goes here.</p>
    </div>
</section>
