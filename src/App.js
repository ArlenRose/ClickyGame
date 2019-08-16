import React from 'react';

class app extends React.Component {
  state = {
    picsArray: [
      {
        id: 1,
        url: "https://i.pinimg.com/564x/b7/34/7f/b7347f3ab888c0df00096f4956b934d9.jpg",

      },
      {
        id: 2,
        url: "https://i.pinimg.com/564x/a9/71/63/a971636819153ba259739550f8016718.jpg",

      },
      {
        id: 3,
        url: "https://i.pinimg.com/564x/78/bf/1c/78bf1c26d54e6c5b363f419321fe2b5f.jpg",

      },
      {
        id: 4,
        url: "https://i.pinimg.com/564x/b7/34/7f/b7347f3ab888c0df00096f4956b934d9.jpg",

      },
      {
        id: 5,
        url: "https://i.pinimg.com/564x/a9/71/63/a971636819153ba259739550f8016718.jpg",

      },
      {
        id: 6,
        url: "https://i.pinimg.com/564x/78/bf/1c/78bf1c26d54e6c5b363f419321fe2b5f.jpg",

      },
      {
        id: 7,
        url: "https://i.pinimg.com/564x/b7/34/7f/b7347f3ab888c0df00096f4956b934d9.jpg",

      },
      {
        id: 8,
        url: "https://i.pinimg.com/564x/a9/71/63/a971636819153ba259739550f8016718.jpg",

      },
      {
        id: 9,
        url: "https://i.pinimg.com/564x/78/bf/1c/78bf1c26d54e6c5b363f419321fe2b5f.jpg",

      },
    ]
  }

  //The portion that handles the clicks of your images.
  handleClick = () => {
    console.log("you´ve been clicked!");
    function shuffle(a) {
      var j, x, i;
      for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
      }
      return a;
    }
    var oldArray = this.state.picsArray
    var shuffledArray = shuffle(oldArray)
  }


  render() {
    console.log(this.state)
    var styles = {
      picStyle: {
        height: "300px",
      },
    }
    var self = this
    return (
      <div>
        <h1>test!</h1>
        {this.state.picsArray.map(function (singlePic) {
          return (
            <img
              src={singlePic.url}
              style={styles.picStyle}
              onClick={self.handleClick}>
            </img>
          )
        })}
      </div>
    );
  }
}

export default app;