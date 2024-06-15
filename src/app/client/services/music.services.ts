import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})

export class MusicServices {
    card = [
        {
          songName: 'Aaikka alaikka',
          artist: 'Harris jayaraj',
          views: '10M views',
          image: 'assets/songs/alaikka.jpeg'  
        },
        {
          songName: 'Nilayo',
          artist: 'Santhosh Narayanan',
          views: '60M views',
          image: 'assets/songs/bairavaa.jpeg'  
        },
        {
          songName: 'Arabic huthu',
          artist: 'Anirundh',
          views: '600M views',
          image: 'assets/songs/beast.jpeg'  
        },
        {
          songName: 'Google Google',
          artist: 'Harris jayaraj',
          views: '25M views',
          image: 'assets/songs/google.jpeg'  
        },
        {
          songName: 'Hayyoda',
          artist: 'Anirundh',
          views: '100M views',
          image: 'assets/songs/hayyoda.jpeg'  
        },
        {
          songName: 'macho',
          artist: 'AR rahman',
          views: '90M views',
          image: 'assets/songs/macho.jpeg'  
        },
        {
          songName: 'Naa Ready',
          artist: 'anirundh',
          views: '200M views',
          image: 'assets/songs/naaready.jpeg'  
        },
        {
          songName: 'Neethane',
          artist: 'AR rahman',
          views: '69M views',
          image: 'assets/songs/neethane.jpeg'  
        },
        {
          songName: 'Srivalli',
          artist: 'DSP',
          views: '90M views',
          image: 'assets/songs/pushpa.jpeg'  
        },
        {
          songName: 'Rowdy Baby',
          artist: 'Yuvan',
          views: '1.2B views',
          image: 'assets/songs/rowdy.jpeg'  
        },
        {
          songName: 'Vaa Vaathi',
          artist: 'GV prakash',
          views: '87M views',
          image: 'assets/songs/vaathi.jpeg'  
        },
        {
          songName: 'Vennilave',
          artist: 'Harris jayaraj',
          views: '40M views',
          image: 'assets/songs/vennilave.jpeg'  
        },
      ]

      albums = [
        {
          songName:'kaththi',
          image :'assets/albums/kththi.jpeg',
          songDesc :' Anirudh Ravichadran'
        },
        {
          songName:'90s Hit',
          image :'assets/albums/90s hit.jpeg',
          songDesc :'Arrahman,Ilayaraja,deva'
        },
        {
          songName:'90s Love Hits',
          image :'assets/albums/90s.jpeg',
          songDesc :'Vidyasagar,Ilayaraja,deva'
        },
        {
          songName:'Happy Vibes Tamil',
          image :'assets/albums/happy vibes.jpeg',
          songDesc :'Thaman s, Anirudh'
        },
        {
          songName:'Vijay Hits',
          image :'assets/albums/vijay.jpeg',
          songDesc :'ARrahman, Anirudh'
        },
        {
          songName:'Motivational Songs',
          image :'assets/albums/motivational.jpeg',
          songDesc :'Harris Jayaraj, Anirudh'
        },
        {
          songName:'sleeping Songs',
          image :'assets/albums/sleeping.jpeg',
          songDesc :'Hip Hop,GV prakash'
        },
        {
          songName:'Soft Tamil',
          image :'assets/albums/soft.jpeg',
          songDesc :'Harris Jayaraj,AR rahman'
        },
        {
          songName:'Tamil HIts',
          image :'assets/albums/tamil.jpeg',
          songDesc :'Yuvan,Govind,Ar rahman'
        },
        {
          songName:'Trending Viral Tamil',
          image :'assets/albums/trending.jpeg',
          songDesc :'Harris Jayaraj, Anirudh'
        },
        {
          songName:'Ultimate Love Songs',
          image :'assets/albums/ultimate love.jpeg',
          songDesc :'GV prakash, Anirudh'
        },
       
      ]
  
      artists = [
        {
          artistName:'AR Rahman',
          image :'assets/artists/rahman.jpeg',
          songDesc :'4.4M subscribtions'
        },
        {
          artistName:'Anirundh',
          image :'assets/artists/anirundh.jpeg',
          songDesc :'2.4M subscribtions'
        },
        {
          artistName:'GV Prakash Kumar',
          image :'assets/artists/gv.jpeg',
          songDesc :'1.4M subscribtions'
        },
        {
          artistName:'Harris Jayaraj',
          image :'assets/artists/hariss.jpeg',
          songDesc :'1.2M subscribtions'
        },
        {
          artistName:'SS Thamman',
          image :'assets/artists/thamman.jpeg',
          songDesc :'1.8M subscribtions'
        },
        {
          artistName:'Vijay Antony',
          image :'assets/artists/vijayantony.jpeg',
          songDesc :'668K subscribtions'
        },
      ]
}