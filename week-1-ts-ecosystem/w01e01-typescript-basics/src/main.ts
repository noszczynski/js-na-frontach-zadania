/**
 * Zasady co do pliku:
 *
 * Możesz dowolnie modyfikować zawartość tego pliku,
 * całość programu musi jednak działać tak jak do tej pory !
 *
 * */
import {User} from "./types/User";
import {user} from "./user";

function hasAddress({ address }: User): boolean {
  return !!address
}

function hasGivenAge(requiredAge: number): (user: User) => boolean {
  return (user) => (user.age >= requiredAge)
}

const isAdult = hasGivenAge(1)

console.log(`User ${user.name} is ${isAdult(user) ? 'adult' : 'minor'}`)
console.log(`and has${hasAddress(user) ? '' : ' no'} address`)

export {};
