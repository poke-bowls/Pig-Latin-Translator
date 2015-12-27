var expect = chai.expect;
chai.should();

describe( 'translator', function() {
  it( 'should exist', function() {
    expect(translator).to.exist;
    expect(translator).to.be.a('function');
  });

  it('should return a stringified number', function() {
    var result = translator( 'Hello World!' );

    expect( result ).to.be.a( 'string' );
    expect( result ).to.be.equal( '9' ); // '9'
    expect( result.length ).to.be.equal( 1 );

    result = translator(10);

    result.should.be.a( 'string' );
    result.should.equal( '10' );
    result.should.have.length( 2 );

  });

});