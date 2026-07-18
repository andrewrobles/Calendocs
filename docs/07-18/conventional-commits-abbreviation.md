[Conventional Commits Abbreviation](../07-18.md)

> Why does conventional commits use feat instead of feature?

The short answer is: **brevity and consistency**.

When the Conventional Commits specification was designed, it intentionally chose short, standardized commit types. `feat` was selected instead of `feature` for a few reasons:

1. **It's concise**

   * `feat: add OAuth login`
   * `fix: handle null pointer`
   * `docs: update README`

   These prefixes appear on virtually every commit, so keeping them short makes commit history easier to scan.

2. **It matches other abbreviated types**
   The core commit types are all relatively short:

   * `feat`
   * `fix`
   * `docs`
   * `style`
   * `refactor`
   * `perf`
   * `test`
   * `build`
   * `ci`
   * `chore`

   Using `feature` would make one type noticeably longer than the others.

3. **It's unambiguous**
   Unlike some abbreviations, `feat` is widely understood in software development to mean "feature." There isn't much risk of confusion.

4. **Tooling expects it**
   Many tools in the Conventional Commits ecosystem (such as release automation and changelog generators) recognize `feat` as the standard type for introducing a new feature. While many tools can be configured to accept `feature`, using `feat` works out of the box across the ecosystem.

### Could the spec have used `feature`?

Absolutely. There isn't anything technically preventing it. In fact, if you're creating your own internal convention, you could use:

```text
feature: add OAuth login
bugfix: handle null pointer
documentation: update README
```

The tradeoff is that you'll likely need to customize tooling that assumes the standard Conventional Commits types.

### Why not abbreviate everything?

Interestingly, the spec isn't trying to make every type as short as possible. For example, it uses `refactor` instead of `refac` and `breaking change` via the `!` syntax or footer rather than an abbreviation. The goal is **readability first**, with abbreviations only where they're already common (`feat`, `docs`, `perf`, `ci`).

So `feat` is essentially a pragmatic compromise: short enough to keep commit messages compact, but familiar enough that most developers immediately know it means "feature."
