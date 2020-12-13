const request = require('supertest'), //SupertTest
app = "http://localhost:8080" //路径
describe('devices test', function() {	
	it('/device api test',function(done) {
		request(app)
            .get('/get')
            .expect(200) //断言希望得到返回http状态码
            .end(function(err, res) {
                console.info(res.text);//得到返回我们可以用2.2中的断言对返回结果进行判断。
                done();

            });
	});
});