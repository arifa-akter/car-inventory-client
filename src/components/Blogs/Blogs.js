import React from 'react';
import './Blogs.css'
const Blogs = () => {
    return (
        <section className='blogs'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-7 col-12 mx-auto">
                        <div className="blog-text">
                          <h2><span>1.</span>
                              Difference between javascript and node js ?</h2>
                          <table className="table border">
                          <thead className="thead-dark">
                          <tr>
                          <th scope="col"></th>
                          <th scope="col" className='color-th'>JavaScript</th>
                          <th scope="col" className='color-th'>Node js</th>
                          </tr>
                          </thead>
                          <tbody>
                          <tr>
                          <th scope="row">1</th>
                          <td>It is basically used on the client-side</td>
                          <td>It is used on the server-side.</td>
                          </tr>
                          <tr>
                          <th scope="row">2</th>
                          <td>Javascript is used in frontend development</td>
                          <td>Nodejs is used in server-side development</td>
                          </tr>
                          <tr>
                          <th scope="row">3</th>
                          <td>Javascript is capable enough to add HTML and play with the DOM</td>
                          <td>Nodejs does not have capability to add HTML tags</td>
                          </tr>
                          <tr>                                
                          <th scope="row">4</th>
                          <td>javascript is programming language </td>
                          <td>node js is javascript run time environment</td>
                          </tr>
                          <tr>
                          <th scope="row">5</th>
                          <td>It is the upgraded version of ECMA script that uses Chrome’s
                               V8 engine written in C++.</td>
                          <td>Nodejs is written in C, C++ and Javascript</td>
                          </tr>
                          </tbody>
                          </table>

                        <h2> <span>2.</span>When should you use node js and when should you use mongodb?</h2>
                        <span className='reds'> node js:</span>
                        <p>
                        javascript is most popular language other side node js is javascript 
                        run time environment node js help in server side.we use any language in 
                        backend side but if we want to one language in both side then use node js and javascript.
                        Node.js is the greatest tool for building real-time web applications .Node.js is primarily used for non-blocking, 
                        event-driven servers, due to its single-threaded nature. if we made big communication web application such as a facebook and twiter
                        then we used node js.
                        </p>
                        <span className='reds'>mongodb:</span>
                        <p>
                         mongodb is unstructured non relationship nosQl data  
                         here data store in json-formet which help to javascript and nodejs server
                         side application . which is very help full for javascript side language. because data are 
                         store in json
                        </p>

                         <h2> <span>3.</span>Difference between Sql and noSql ?</h2>
                          <table className="table border">
                          <thead className="thead-dark">
                          <tr>
                          <th scope="col"></th>
                          <th scope="col" className='color-th'>Sql</th>
                          <th scope="col" className='color-th'>NoSql</th>
                          </tr>
                          </thead>
                          <tbody>
                          <tr>
                          <th scope="row">1</th>
                          <td>structure base data based </td>
                          <td>non structure based data base </td>
                          </tr>
                          <tr>
                          <th scope="row">2</th>
                          <td>Vertically Scalable</td>
                          <td>Horizontally scalable</td>
                          </tr>
                          <tr>
                          <th scope="row">3</th>
                          <td>These databases are not suited for hierarchical data storage.</td>
                          <td>These databases are best suited for hierarchical data storage.</td>
                          </tr>
                          <tr>                                
                          <th scope="row">4</th>
                          <td>Follows ACID property</td>
                          <td>Follows CAP(consistency, availability, partition tolerance)</td>
                          </tr>
                          <tr>
                          <th scope="row">5</th>
                          <td>These databases have fixed or static or predefined schema</td>
                          <td>They have dynamic schema</td>
                          </tr>
                          </tbody>
                          </table>

                          <h2> <span>4.</span>what is the purpose of Jwt and how does it work</h2>
                        <p>
                        jwt stand for json web token it is a most popular web authorization for maicroservice
                        it main purpose of jwt two party are connected secure stander way. there  rsc 7519 stander structure are told 
                        how jwt work how it design rsc is a stander structure of jwt . when client authenticate then server store a information in json formet and also sign 
                        pass this information in client side next time client full json token send in server. client store information in browser and cookies 

                        </p>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blogs;