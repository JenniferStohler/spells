
import { AppState } from '../AppState'
import Spell from '../models/Spell'
import { dndApi } from './AxiosService'

class SpellsService {
  async getSpells(query) {
    const res = await dndApi.get(query)
    console.log(res);
    AppState.results = res.data.results.map(r => new Spell(r))
  }

  setActive(spell) {
    AppState.activeSpell = spell
  }
}

export const spellsService = new SpellsService()