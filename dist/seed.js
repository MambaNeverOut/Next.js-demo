"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

require("reflect-metadata");

var _typeorm = require("typeorm");

// import { Post } from "./entity/Post";
(0, _typeorm.createConnection)().then( /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(connection) {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // const posts = await connection.manager.find(Post);
            // if (posts.length === 0) {
            //   // const p = new Post('Post', '我的第一篇文章');
            //   // p.title = 'Post 1';
            //   // p.content = '我的第一篇文章';
            //   await connection.manager.save([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(n => {
            //     return new Post({ title: `Post${n}`, content: `这是我的第${n}篇文章` })
            //   }))
            //   console.log('posts 数据填充了');
            // }
            // const posts2 = await connection.manager.find(Post);
            // console.log(posts2);
            connection.close();

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}())["catch"](function (error) {
  return console.log(error);
});