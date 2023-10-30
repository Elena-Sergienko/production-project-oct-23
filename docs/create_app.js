// Уроки

/**
 * Модуль 1.1
 * Инициализируем
 * npm i -y
 * 
 * Создаем папку src 
 * и в ней два файла для тестирования импортов
 * index.js 
 * test.js
 * 
 * Устонавливаем как Dev зависимости!
 * webpack
 * и webpack-cli чтобы работать с ним через командную строку 
 * https://webpack.js.org/guides/getting-started 
 * npm install webpack webpack-cli --save-dev
 * 
 * 
 * В корне создаем 
 * webpack.config.js
 * 
 * и в него помещаем простую конфигурацию с сайта:
 * const path = require('path');
 *
 *  module.exports = {
 *  entry: './src/index.js',
 *  output: {
 *      filename: 'main.js',
 *      path: path.resolve(__dirname, 'dist'),
 *  },
 *  };
 * 
 * Создаем папку
 * public
 * и в ней файл
 * index.html (! enter - шаблон)
 * нужно сообщить вебпаку где он 
 * и также в этот файлик будем встраивать js скрипты которые будем писать
 * Для этого у вебпака есть плагины которые могут выполнять различные операции
 * 
 * HtmlWebpackPlugin 
 * webpack.ProgressPlugin()
 * 
 * Типизация
 * TypeScript
 * https://webpack.js.org/guides/typescript/#root
 * First install the TypeScript compiler and loader by running:
 * npm install --save-dev typescript ts-loader
 * 
 * Создаем файл 
 * tsconfig.json
 * {
  "compilerOptions": {
    "outDir": "./dist/",
    "noImplicitAny": true,
    "module": "es6",
    "target": "es5",
    "jsx": "react",
    "allowJs": true,
    "moduleResolution": "node"
  }
}
 * 
 * 
 * Меняем расширение существующих .js файлов на .ts
 * 
 * Добавляем в файл webpack.config.js два поля:
 * resolve (теперь не нужно расширение в импортах указывать)
 * rules (важное поле - для лоудеров, чтобы обрабатывать файлы с определенным разрешением, которые выходят за рамки js)
 * 
 * 
 * Чтобы сам config писать на TypeScript необходимо:
 * https://webpack.js.org/configuration/configuration-languages/
 * dependencies
 * Меняем расширение webpack.config.js  на .ts
 * теперь можно в этом файле указать привычные нам импорты 
 * 
 * Чтобы использовать привычные нам импорты import нам необходимо
 * в tsconfig.json добавляем 2 флага:
 * "allowSyntheticDefaultImports" : true - позволяет использовать привычные импорты без звездочки, даже если у пакета нет дефолтного импорта
 * "esModuleInterop" : true -  позволяет работать с пакетами, которые использует common js как с обычными пакетами import (вот это common js -> require() module.export)
 * 
 * 
 * Рассмотрим другие переменные tsconfig.json файла
 * {
    "compilerOptions": {
      "outDir": "./dist/", // то куда производится сборка, но для нас это не особо важно поскольку мы собираем с помощью вебпака
      "noImplicitAny": true, // не позволяет нам использовать какие-то переменные без явного указания типа
      "module": "ESNext", // указываем модульную систему это различные способы модульной сборки ESNext или ES6 или CommonJS (можно использовать на бэкэнде)
      "target": "es5", // в какую версию код будет компилироваться обычно указывается es5 или es6; для поддержки большинства браузеров
      "jsx": "react", // для синтаксиса реакта который мы будем использовать
      "allowJs": true,  // чтобы компилятор обрабатывал не только .ts файлы, но и .js файлы
      "moduleResolution": "node",
      "baseUrl": ".",
      "esModuleInterop": true,
      "allowSyntheticDefaultImports": true
    },
    "ts-node": { // если в ключе "module" выше мы указали не CommonJS, то нужны эти дополнительные настройки
        "compilerOptions": {
          "module": "CommonJS"
        }
    }
  }  
 * 
 * Укажем тип для config webpack.config.ts - webpack.Configuration 
 * теперь среда разработки подсказывает все типы
 * 
 * 
 * Первый урок окончен: 
 * - мы настроили небольшой конфиг (webpack.config), 
 * - научились работать с TypeScript 
 * - перевели нашу конфигурацию на TypeScript
 * - сконфигурировали tsconfig.json
 */

  /**
   * Модуль 1.2
   * Декомпозиция конфига
   * 
   * Создаем папку config
   * в ней папки: build, eslint, jest
   * в build для каждого вебпак свойства создаем файлик и переносим туда код как функции (указывая типы) 
   * - config/build/buildLoaders.ts (тип webpack.RuleSetRule[])
   * - config/build/buildPlugins.ts (тип webpack.WebpackPluginInstance[])
   * - config/build/buildResolvers.ts (тип ResolveOptions)
   * 
   * Внимание! Порядок лоудеров имеет значение!
   * 
   * 
   * Чтобы пути задавать на этапе до сборки
   * (чтобы конфигурировать конфиг, задавать какие-то опции, режим development или production и др)
   * Создаем папку types: config/build/types
   * и файл config.ts: config/build/types/config.ts
   * опишем тут опции сборки 
   * 
   * Создаем buildWebpackConfig.ts и перенесем сюда всю конфигурацию которую деллали в корне проекта 
   * - config/build/buildWebpackConfig.ts (тип webpack.Configuration)
   * оформляем это в функцию
   * И как раз эта функция будет принимать набор опция который мы сделали на предыдущем шаге здесь: 
   * config/build/types/config.ts
   * 
   * Переносим пути, создав объект с путями в webpack.config.ts
   * const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.ts'),
        build: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
     }
   * 
   * Второй урок окончен:
   * Сделали декомпозицию
   * Сделали опции для управления сборкой
   */

     /**
      * Модуль 1.3
      * Настраиваем Webpack-dev-server
      * Автоматически перезапускать сборку и отдавать уже обновленные файлы 
      * https://webpack.js.org/guides/development/ 
      * 
      * Source map
      * В итоговом файле сборки сложно отследить ошибку, поэтомуу вебпак делает карты исходного кода
      * в результате по стак трейсу можно отследить где произошла ошибка в каком файле 
      * добавляем inline-source-map:
      * devtool: isDev ? 'inline-source-map': undefined, // to track down errors and warnings for Dev mode
      * 
      * 
      * Выбираем Development Tool  - webpack-dev-server
      * 
      * Устонавливаем пакет webpack-dev-server
      * также нам нужно скачать типы для пакета 
      * npm install --save-dev webpack-dev-server @types/webpack-dev-server
      * 
      * Создаем файл config/build/buildDevServer.ts
      * 
      * Создаем скрипты
      *
      * Но и хотим отделить  prod и dev сборки
      * Для этого нам нужны переменные окружения
      * https://webpack.js.org/guides/environment-variables/ 
      * в вебпаке мы можем в скрипте использовать флаг --env
      * 
        "start": "webpack serve --env port=3000", // запуск приложения
        "build:prod": "webpack --env mode=production", // сборка для прод
        "build:dev": "webpack --env mode=development"  // сборка для дев    
      * 
      * рефакторим в webpack.config.ts - в функцию (принимающую переменные окружения) и возвращаем config
      * Добавляем тип
      * 
      * Третий урок окончен:
      * Настроили Webpack-dev-server
      * Научились передавать переменные окружения
      * 
      */


/**
 * Модуль 1.4
 * Подключаем React и настраиваем css в webpack
 * 
 * 
 */