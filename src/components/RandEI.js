import React, { useEffect, useState, useContext } from 'react'
import { Link } from 'react-router-dom'

import { ApiContext } from './ApiContext'
import { Controller, Scene } from 'react-scrollmagic'

const Artists = () => {

  const [artistsData, setArtistsData] = useState([])
  const [similarArtists, setSimilarArtists] = useState([])
  const token = useContext(ApiContext)
  const [key, setKey] = useState('')

  useEffect(() => {
    fetch('https://api.artsy.net/api/artists?cursor=100%3A5ee9c1c34ed9d50007d748b9&gene_id=4de93fa9c182420001004327', { headers: { 'X-XAPP-Token': token } })
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
  return <>
    <h1>RACIAL AND ETHNIC IDENTITY</h1>

    <div className="cardSection">
      <p>&quot;From its increased significance at the height of European colonialism to the foundations of Enlightenment-era pseudoscience, the concept of race has been used to categorize humans along the lines of shared characteristics in order to understand human difference. Racism, which sociologist Howard Winant defines as “that which creates or reproduces hierarchical social structures based on essentialized racial categories,” has fueled unthinkable violations of human life.&quot;</p>
      {artistsData.map((artist, index) => {
        return <div key={index}>
          <Controller>
            <Scene triggerHook={'onEnter'} classToggle="fadeInUp">
              <div className="artistCard">
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
          <button className="button-2" key={index} id={artist.id} value={artist._links.similar_artists.href} onClick={() => displaySimilar(event, index)}>Similar Artists</button>
        </div>
      })}
    </div>
  </>

}

export default Artists