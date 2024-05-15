import Debug "mo:base/Debug";

actor {
  public query func greet(name : Text) : async Text {
    Debug.print name;

    return "GM GM, " # name # "!";
  };
};
