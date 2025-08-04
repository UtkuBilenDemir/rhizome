---
title: nVim
tags:
- project_main_note 2023
---
|     Created      |  Last Modified   |       Exists Since        |
|:----------------:|:----------------:|:----------------:|
| `= this.file.ctime` | `= this.file.mtime` | `= date(now) - this.file.ctime`|

# nVim
created: 2023-04-07 14:29

## Plugins to test
- [x] #todo/research  [obsidian.nvim](https://github.com/epwalsh/obsidian.nvim) ✅ 2024-11-08
	- Pretty good one, needs some more functions like being able to apply templates
- [x] #todo/research [which-key.nvim](https://github.com/folke/which-key.nvim) ✅ 2024-11-08
	- https://alpha2phi.medium.com/neovim-for-beginners-plugins-for-key-mappings-2563b25923a
	- Built-in in [[LazyVim]], pretty helpful.
- https://www.maxwellrules.com/misc/nvim_jupyter.html
- [ ] #todo/research [profile.nvim](https://github.com/stevearc/profile.nvim?tab=readme-ov-file)
- [ ] #todo/research [Spelunk](https://github.com/EvWilson/spelunk.nvim)

## Colorschemes
- [Oxocarbon](https://github.com/nyoom-engineering/oxocarbon.nvim)

## Glossary
`h rtp`: runtime paths, shows which directories 
`:%s/old/new/gc`: to find every occurrence in the whole file, with a prompt whether to substitute or not.

## Useful codeblocks

```lua
-- Autocommand that reloads neovim whenever you save the packer.lua file
vim.cmd([[
augroup packer_user_config
autocmd!
autocmd BufWritePost packer.lua source <afile> | PackerSync
augroup end
]])
```

## Keybindings

`:map`: see all the key bindings
`:verbose map <Leader>t`: see a specific keybinding

## TODO

### https://www.youtube.com/watch?v=1f7l2-Fap2s

- Try tagbar: https://github.com/preservim/tagbar
- fzf: https://github.com/vijaymarupudi/nvim-fzf
- good guide: https://alpha2phi.medium.com/learn-neovim-the-practical-way-8818fcf4830f

## Coding
- Use [[iron.nvim]] to run code line by line or by selection.

## References
