// screen dimensions
var screenHeight = 1300;
var screenWidth = 1950;

// weapons
var axe;
var sword;
var lance;

// number of weapons (max 2)
var weaponCount = [];

// which weapon won
var winningWeapon;


function preload()
{
  // creates assets
  lance = new Weapon(50, 500, 200, 200, "assets/Lance.png", "Lance");
  lance.click = lanceClick;

  axe = new Weapon(500, 500, 200, 200, "assets/Axe.png", "Axe");
  axe.click = axeClick;

  sword = new Weapon(275, 100, 200, 200, "assets/Sword.png", "Sword");
  sword.click = swordClick;
}



function setup()
{
  createCanvas(screenWidth, screenHeight);
}



function draw()
{
  // displays all the assets
  background(0);

  image(lance.image, lance.x, lance.y, lance.w, lance.h);
  image(axe.image, axe.x, axe.y, axe.w, axe.h);
  image(sword.image, sword.x, sword.y, sword.w, sword.h);

  // draw text
  textSize(100);
  fill(255, 255, 255);
  text(weaponCount, 1000, 100);

  if (weaponCount.length == 2)
  {
    weaponTriangle(weaponCount[0], weaponCount[1]);
    text(winningWeapon + " wins.", 1000, 500);
  }

}

function weaponTriangle(weapon1, weapon2)
{
  // decides who wins
  if (weapon1 == "Lance" && weapon2 == "Sword" || weapon1 == "Axe" && weapon2 == "Lance" || weapon1 == "Sword" && weapon2 == "Axe")
  {
    winningWeapon = weapon1;
  }
  else if (weapon1 == "Sword" && weapon2 == "Lance" || weapon1 == "Axe" && weapon2 == "Sword" || weapon1 == "Lance" && weapon2 == "Axe")
  {
    winningWeapon = weapon2;
  }
  else
  {
    winningWeapon = "neither";
  }
}

function mouseReleased()
{
  // button presses
  if (lance.wasClicked(mouseX, mouseY))
  {
    lance.click();
  }
  if (axe.wasClicked(mouseX, mouseY))
  {
    axe.click();
  }
  if (sword.wasClicked(mouseX, mouseY))
  {
    sword.click();
  }
}



function lanceClick()
{
  // lance clicked
  addInput("Lance");
}

function axeClick()
{
  // axe clicked
  addInput("Axe");
}

function swordClick()
{
  // sword clicked
  addInput("Sword");
}

function addInput(keyString)
{
  // adds weapon to weaponCount
  if (weaponCount.length < 2)
  {
    weaponCount.push(keyString);
  }
}