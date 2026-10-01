class Weapon
{

  // used to create a button
  constructor(x, y, w, h, imageName, weaponType)
  {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.imageName = imageName;
    this.image = loadImage(imageName);
    this.weaponType = weaponType;
  }

  // AKA rectContains
  // determines if a click @ (x,y) falls within this rectangle
  // can be used to determine if this button was clicked
  wasClicked(x, y)
  {
    if (x >= this.x && x <= this.x + this.w && y >= this.y && y <= this.y + this.h)
    {
      return true;
    }
    else
    {
      return false;
    }
  }

}

// EXAMPLE BUTTON
/*
var myButton = new Button(50, 20, 100, 30, "assets/my button.png");
myButton.wasClicked(mouseX, mouseY);
*/