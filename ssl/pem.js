// 使用加密模块, 创建安全可靠的连接
/**
 * 创建ssl私钥
 * 1. 创建服务器私钥
 * openssl genrsa -out server.pem 1024
 * 2. 为服务器创建CSR(Certificate Signing Request) 证书请求文件
 * openssl req -new -key server.pem -out server-csr.pem
 * 3. 签发服务器私钥
 * openssl x509 -req -in server-csr.pem -signkey server.pem -out server-cert.pem
 * 4. 创建客户端私钥
 * openssl genrsa -out client.pem 1024
 * 5. 为客户端创建CSR
 * openssl req -new -key client.pem -out client-csr.pem
 * 6. 签发客户端私钥
 * openssl x509 -req -in client-csr.pem -signkey client.pem -out client-cert.pem
 */