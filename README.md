# js-ghost-recipe
Jumpstarter recipe for nodejs and ghost

To speed up starting of ghost instances, issue the following commands after successful deploy:

```bash
/app/code/init
```

wait for ghost to populate all database tables and give the message that the blog is available at https://_subdomain_.jump.st and do `ctrl+c` to stop the init script.

```bash
mkdir /app/code/js-init-state
```

```bash
cp -r /app/state/ghost/* /app/code/js-init-state/
```

This way the db file and content directories created when running `/app/code/init` will be copied to the correct location upon instance start.
