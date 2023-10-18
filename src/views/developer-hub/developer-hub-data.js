const developerData = [{
    id : 1,
    developer_name : 'Yiorgos Avraamu',
    country : 'us',
    email : 'ar@gmail.com',
    profile_pic: 'image_url',
    occupation : 'Web Developer',
    age : '23',
    location : 'Texas, Houston',
    //Activity info
    questions : [
        {
            question_id : 1,
            question_text : 'Some text',
            related_to : 'php'
        },{
            question_id : 2,
            question_text : 'Some text',
            related_to : 'Js'
        },{
            question_id : 3,
            question_text : 'Some text',
            related_to : 'node'
        }
    ],
    answer : [{
        answer_id : 1,
        answer_text: 'some Text'
    },{
        answer_id : 2,
        answer_text: 'some Text'
    },{
        answer_id : 3,
        answer_text: 'some Text'
    }],
    reply : [{
        reply_id : 1,
        reply_text: 'some Text'
    },{
        reply_id : 2,
        reply_text: 'some Text'
    },{
        reply_id : 3,
        reply_text: 'some Text'
    }],
    bookmarks : 'some _texts',
    following : 'some_texts',
    //community
    php: 4,
    laravel : 5,
    html: 4,
    js : 1
}]
export default developerData