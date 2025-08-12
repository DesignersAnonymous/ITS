---
title: Contact Us
permalink: "/contact-us/"
layout: default
---

<section id="contact-us">
    <div class="about ripped after-ripped">
        <h2>{{ page.title }}</h2>
    </div>
    <div class="contact-info">
        <div class="container flex">
        <div class="left">
            <span class="address">
                {{ site.data.contact.address | markdownify }}
            </span>
        </div>
        <div class="right">
            <p><a href="mailto:{{ site.data.contact.email }}">{{ site.data.contact.email }}</a></p>
            <p> {% for number in site.data.contact.phone %}
                T: <a href="tel:+44{{ number | remove: ' ' }}">{{ number }}</a>{% unless forloop.last %} / {% endunless %}
                {% endfor %}
            </p>
            <p class="smaller-text">For precise location:</p>
            <p class="flex-www"><img src="/assets/images/what3wrods.png"><a href="https://w3w.co/cool.actors.showrooms">{{ site.data.contact.what3words }}</a></p>
        </div>
        </div>
        <div class="container">
            <div class="map-container">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2338.0641239843403!2d-0.6129999233288222!3d52.71894897211408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48782814763aa5d5%3A0x4197367bb11d0a09!2sIn%20The%20Stix!5e1!3m2!1sen!2ses!4v1754994478594!5m2!1sen!2ses" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

            </div>
        </div> 
    </div>  
</section>

