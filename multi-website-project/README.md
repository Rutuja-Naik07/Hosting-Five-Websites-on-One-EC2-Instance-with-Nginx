# Five Interactive Website Demos

A beginner-friendly portfolio project demonstrating five original front-end interfaces inspired by streaming and e-commerce experiences. Built with plain HTML, CSS, and JavaScript.

## Project structure

```text
multi-website-project/
├── site1/  # StreamFlix: streaming-inspired interface
│   ├── index.html
│   ├── style.css
│   └── web1.js
├── site2/  # StarPlay: entertainment-inspired interface
│   ├── index.html
│   ├── style.css
│   └── web2.js
├── site3/  # JioWave TV: channel guide-inspired interface
│   ├── index.html
│   ├── style.css
│   └── web3.js
├── site4/  # ShopSphere: shopping-inspired interface
│   ├── index.html
│   ├── style.css
│   └── web4.js
└── site5/  # QuickKart: shopping-inspired interface
    ├── index.html
    ├── style.css
    └── web5.js
```

## Run locally

Open any `index.html` file in a browser. An internet connection is needed for the Google Fonts and remote Unsplash images. No build tools or package installation are required.

## Deploy to EC2 with Nginx

Copy the five folders to `/var/www/` so the paths become `/var/www/site1` through `/var/www/site5`. Then create `/etc/nginx/conf.d/websites.conf` with the following server blocks:

```nginx
server { listen 8081; server_name _; root /var/www/site1; index index.html; }
server { listen 8082; server_name _; root /var/www/site2; index index.html; }
server { listen 8083; server_name _; root /var/www/site3; index index.html; }
server { listen 8084; server_name _; root /var/www/site4; index index.html; }
server { listen 8085; server_name _; root /var/www/site5; index index.html; }
```

Validate and reload Nginx:

```bash
sudo nginx -t
sudo systemctl reload nginx
```

Allow TCP ports 8081-8085 in the EC2 security group only from trusted IPs while testing. Use your instance's public IP to visit `http://PUBLIC-IP:8081` through `http://PUBLIC-IP:8085`.

## Interactions included

- Search and filtering
- Responsive layouts for mobile and desktop
- Interactive content cards
- Sample shopping cart counter on sites 4 and 5
- Status messages and featured-item actions

## Important notes

These are educational front-end demos, not exact copies of any company's website. Streaming, live TV, authentication, payment, and checkout services are not connected. Product prices are examples. Remote image URLs require internet access.

## Push to GitHub

Create a new empty repository on GitHub, then run these commands from this project folder:

```bash
git init
git add .
git commit -m "Add five interactive HTML CSS JavaScript websites"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
git push -u origin main
```

Replace the remote URL with your own repository URL.
