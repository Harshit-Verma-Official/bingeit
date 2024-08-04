#!/bin/sh

# Check if certificates already exist
if [ ! -f /etc/letsencrypt/live/$DOMAIN/fullchain.pem ]; then
  # Obtain initial certificates using IPv4 only
  certbot certonly --webroot \
    --webroot-path=/var/www/certbot \
    --email $EMAIL \
    --agree-tos \
    --no-eff-email \
    --preferred-challenges http \
    --deploy-hook "docker exec nginx nginx -s reload" \
    -d $DOMAIN \
    --non-interactive \
    --force-renewal
fi

# Start the renewal process
trap exit TERM; while :; do certbot renew --preferred-challenges http --deploy-hook "docker exec nginx nginx -s reload"; sleep 12h & wait $!; done;
