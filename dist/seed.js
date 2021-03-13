"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

require("reflect-metadata");

var _typeorm = require("typeorm");

var _Post = require("./entity/Post");

var _User = require("./entity/User");

var _Comment = require("./entity/Comment");

(0, _typeorm.createConnection)().then( /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(connection) {
    var manager, u1, p1, c1;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            manager = connection.manager;
            u1 = new _User.User();
            u1.username = 'irelia';
            u1.passwordDigest = 'xxx';
            _context.next = 6;
            return manager.save(u1);

          case 6:
            // 创建 post 1
            p1 = new _Post.Post();
            p1.title = 'Post 1';
            p1.content = 'My First Post';
            p1.author = u1;
            _context.next = 12;
            return manager.save(p1);

          case 12:
            c1 = new _Comment.Comment();
            c1.user = u1;
            c1.post = p1;
            c1.content = 'Awesome';
            _context.next = 18;
            return manager.save(c1);

          case 18:
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
            console.log('OK!');

          case 20:
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