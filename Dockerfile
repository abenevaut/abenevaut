FROM ghcr.io/abenevaut/vapor-ci:php83

RUN apk --update add \
        imagemagick \
        imagemagick-dev \
        gcc \
        g++ \
        make \
        autoconf \
        pkgconfig \
        nodejs \
        npm \
# Remove alpine cache
    && rm -rf /var/cache/apk/*

RUN docker-php-ext-install exif
