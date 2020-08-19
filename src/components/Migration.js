import React, { useEffect, useState, useContext } from 'react'
import { Link } from 'react-router-dom'

import { ApiContext } from './ApiContext'
import { Controller, Scene } from 'react-scrollmagic'


const MigrationArtists = () => {

  const [artistsData, setArtistsData] = useState([])
  const [similarArtists, setSimilarArtists] = useState([])
  const token = useContext(ApiContext)
  const [key, setKey] = useState('')

  useEffect(() => {
    fetch('https://api.artsy.net/api/artists?gene_id=5266f899cd530eb849000222', { headers: { 'X-XAPP-Token': token } })
      .then(resp => resp.json())
      .then(data => {
        const newData = data._embedded.artists.map((artist) => {
          return { ...artist, showSimilarArtist: false }
        })
        setArtistsData(newData)
      })
  }, [])

  function displaySimilar(event, buttonKey) {
    if (buttonKey === key) {
      setSimilarArtists([])
    } else {

      const id = event.target.id

      fetch(event.target.value, { headers: { 'X-XAPP-Token': token } })
        .then(resp => resp.json())
        .then(data => {

          const newSimilarArtists = data._embedded.artists.map((similarArtist) => {
            return { ...similarArtist, originalArtistID: id }

          })

          const test = similarArtists.concat(newSimilarArtists)
          const result = []
          const seen = {}
          test.forEach((artist) => {
            if (!seen.hasOwnProperty(artist.id)) {
              result.push(artist)
              seen[artist.id] = true
            }
          })
          setKey(buttonKey)
          setSimilarArtists(result)

        })
    }
  }

  return <div className="cardSection">
    <h1 className="RANDE"> MIGRATION</h1>
    <p>&quot;Human migration, which encompasses diaspora, exile, immigration, and emigration, is a significant aspect of world history that has shaped the ethnic, religious, and cultural identities we know today. In recent years, large numbers of migrant workers from South and Central America and the Caribbean have traveled to the United States, while the Mediterranean Sea has seen thousands of migrants traveling from northern Africa to Europe.&quot;</p>
    {artistsData.map((artist, index) => {
      return <div key={index}>
        <Controller>
          <Scene triggerHook={'onEnter'} classToggle="fadeInUp">
            <div className="migrationACard">
              <h2 className="artistsName">{artist.name.toUpperCase()}</h2>
              <img src={artist._links.thumbnail.href} alt={artist.name} />
            </div>
          </Scene>
        </Controller>

        <div className="similarArtistContainer">
          {similarArtists.map((similarArtist) => {
            if (similarArtist.originalArtistID === artist.id) {
              return <div className="similarArtistCard">
                <div> {similarArtist.name.toUpperCase()} </div>
                <img src={similarArtist._links.thumbnail.href} alt={similarArtist.name} />
              </div>

            } else {
              return null
            }
          })}
        </div>
        <button className="button-4" key={index} id={artist.id} value={artist._links.similar_artists.href} onClick={() => displaySimilar(event, index)}>Similar Artists</button>
      </div>
    })}
  </div>
}


export default MigrationArtists