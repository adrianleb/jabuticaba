class P2PTry
  
  currentData: null

  initi: () ->
    console.log "LALA"
    
    @ctx = new webkitAudioContext()
    
    @source = @ctx.createBufferSource();
    @source.connect(@ctx.destination)
    @source.start(0)

    @peer = new Peer('kekeke', {key: 'sbi86lbw0g1d1jor'})
    @peer.on('connection', (conn) =>
      conn.on('data', (data) =>
        console.log('got mess ')
        @ctx.decodeAudioData(data, (d) =>
          @source.buffer = d
        )
      )
    )


window.P2PTry = new P2PTry()
