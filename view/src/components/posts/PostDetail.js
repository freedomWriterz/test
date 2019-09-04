import React, { Component } from 'react'

export class PostDetails extends Component {
    render() {
        return (
            <div>
                <center>
                    <img style={styles.image} src="https://dummyimage.com/900x500/bfb8bf/000000.png" className='mr-3 rounded' alt="" />
                    <h1 className='text-left'>Title</h1>
                    <p style={styles.article}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus maxime sunt illo maiores dolor qui similique optio rem eum reiciendis nulla vel, voluptas natus ipsam voluptates eaque atque velit libero? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum delectus corrupti explicabo, facere asperiores ducimus corporis quisquam a aut voluptates placeat totam nihil repellat obcaecati similique dignissimos, autem rem molestiae. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non nam quisquam impedit animi fugit rem asperiores hic nisi, voluptas minima neque necessitatibus maiores, temporibus sunt vel accusamus aliquid. Cupiditate, saepe? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa incidunt perferendis doloribus pariatur nesciunt voluptatem quisquam exercitationem cumque sunt officiis, esse nobis eligendi eos ut asperiores eum perspiciatis soluta et! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, est consectetur expedita placeat sed culpa facere nihil molestiae illo fugit enim deserunt itaque rerum quaerat consequuntur corporis vero? Consectetur, doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, tempora quia cupiditate hic illo odit! Laudantium nihil eum, magnam nisi, eaque reprehenderit iste incidunt, facilis quas perferendis sit quidem blanditiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam praesentium reiciendis maxime blanditiis eaque, ullam aperiam nulla aliquam voluptate soluta illum, cum incidunt eum asperiores totam quam similique provident in. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas velit laudantium debitis ex placeat, veniam tempora dolore! Ipsum quis similique tempora blanditiis repudiandae laudantium porro, laboriosam, recusandae nam, eveniet eius! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima saepe similique nisi magni quasi. Non eius nisi aliquam ad, qui ipsa pariatur suscipit a exercitationem fuga culpa, dicta eos repudiandae! Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima assumenda suscipit id quos distinctio a sit placeat, fugit incidunt? Ratione mollitia quidem minus ex magnam reiciendis quia, dolorem fugit quo.</p>
                </center>
            </div>
        )
    }
}

var styles = {

    image: {
        marginTop: '10px'

    },
    article: {
        maxWidth: '900px',
        marginTop: '10px'
    },
    title: {
        textAlign: 'left'
    }
}
export default PostDetails
