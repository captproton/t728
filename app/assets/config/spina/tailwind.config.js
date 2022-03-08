module.exports = {
  content: [
    '/Users/carltanner/.asdf/installs/ruby/3.1.0/lib/ruby/gems/3.1.0/bundler/gems/Spina-c974159e11ef/app/views/**/*.*',
'/Users/carltanner/.asdf/installs/ruby/3.1.0/lib/ruby/gems/3.1.0/bundler/gems/Spina-c974159e11ef/app/components/**/*.*',
'/Users/carltanner/.asdf/installs/ruby/3.1.0/lib/ruby/gems/3.1.0/bundler/gems/Spina-c974159e11ef/app/helpers/**/*.*',
'/Users/carltanner/.asdf/installs/ruby/3.1.0/lib/ruby/gems/3.1.0/bundler/gems/Spina-c974159e11ef/app/assets/javascripts/**/*.js',
'/Users/carltanner/.asdf/installs/ruby/3.1.0/lib/ruby/gems/3.1.0/bundler/gems/Spina-c974159e11ef/app/**/application.tailwind.css'
  ],  
  theme: {
    fontFamily: {
      body: ['Metropolis'],
      mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', "Liberation Mono", "Courier New", 'monospace']
    },
    extend: {
      colors: {
        spina: {
          light: '#797ab8',
          DEFAULT: '#6865b4',
          dark: '#3a3a70'
        }
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
  ]
}
