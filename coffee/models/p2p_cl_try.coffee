class P2PClTry
  
  initi: () ->
    console.log "LOLO"
    @peer = new Peer({key: 'sbi86lbw0g1d1jor'})
    @conn = @peer.connect('someid')
    @conn.on('open', () =>
      @conn.send('hi!')
    )

window.P2PClTry = new P2PClTry()
