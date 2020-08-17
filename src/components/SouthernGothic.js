import React, { useEffect, useState, useContext } from 'react'
import { Link } from 'react-router-dom'

import { ApiContext } from './ApiContext'
import { Controller, Scene } from 'react-scrollmagic'

const SouthernGothic = () => {

  const [artistsData, setArtistsData] = useState([])
  const [similarArtists, setSimilarArtists] = useState([])
  const token = useContext(ApiContext)
  const [key, setKey] = useState('')

  useEffect(() => {
    fetch('https://api.artsy.net/api/artists?gene_id=5266f6c2275b2414e300025b', { headers: { 'X-XAPP-Token': token } })
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
    <h1>SOUTHERN GOTHIC</h1>
    <p>&quot;Southern Gothic—a term taken from an established tradition in American Literature—is a category for artworks that feature themes and images drawn from the dark corners of the American South. From the grotesque masked figures present in Ralph Eugene Meatyard’s black-and-white photographs to the antebellum ruins of photographer Sally Mann's images, such works might evoke folklore, oral history, local communities, concepts of the abnormal, and plantation life.&quot;</p>
    {artistsData.map((artist, index) => {
      return <div key={index}>
        <Controller>
          <Scene triggerHook={'onEnter'} classToggle="fadeInUp">
            <div className="sGCard">
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
        <button className="button-3" key={index} id={artist.id} value={artist._links.similar_artists.href} onClick={() => displaySimilar(event, index)}>Similar Artists</button>
      </div>
    })}
  </div>
}


export default SouthernGothic