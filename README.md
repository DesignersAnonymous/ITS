# In the Stix - Glamping Website

This is the official website for "In the Stix", a glamping site in Rutland. The website is built using the Jekyll static site generator and integrates with a third-party booking system.

## About The Project

This project contains the source code for the [inthestix.co](https://www.inthestix.co/) website. It showcases the domes, facilities, and allows users to check availability and make bookings.

## Technology Stack

*   **Static Site Generator**: [Jekyll](https://jekyllrb.com/)
*   **Frontend**: HTML, CSS, JavaScript
*   **JavaScript Libraries**:
    *   jQuery
    *   Prototype.js 1.6.0.3 (legacy)
    *   Scriptaculous 1.8.2 (legacy)
    *   Highslide JS
    *   dhtmlwindow.js
*   **Booking System**: Integrated with [SuperControl](http://www.supercontrol.co.uk/)

## Project Structure

A brief overview of the important directories:

```
.
├── _layouts/         # Contains the HTML layouts for pages.
├── _site/            # The generated static website (usually not version-controlled).
├── assets/           # Contains CSS, JavaScript, images, and other assets.
│   ├── booking-res/  # Assets for the booking/availability grid.
│   └── ...
├── _config.yml       # Jekyll configuration file (if present).
├── *.html            # Jekyll pages.
└── *.markdown        # Jekyll pages with content in Markdown.
```

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

*   [Ruby](https://www.ruby-lang.org/en/documentation/installation/)
*   [Bundler](https://bundler.io/) (`gem install bundler`)
*   Jekyll (`gem install jekyll`)

### Installation & Local Development

1.  **Clone the repository:**
    ```sh
    git clone <repository-url>
    cd ITS
    ```

2.  **Install dependencies:**
    If a `Gemfile` exists, run:
    ```sh
    bundle install
    ```

3.  **Run the Jekyll server:**
    ```sh
    bundle exec jekyll serve
    ```
    The site will be available at `http://localhost:4000`. The `_site` directory will be regenerated automatically when you make changes to the source files.

## Booking System

The availability and booking functionality is handled by an external service, **SuperControl**. The booking grid on the `/booking` page is loaded via AJAX from `supercontrol.co.uk`. The core logic for this can be found in `_layouts/booking.html`.

The system uses older JavaScript libraries like Prototype.js and Scriptaculous, which are required for the booking components to function correctly.