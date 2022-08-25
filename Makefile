root_dir?=`pwd`

add-project-dependency-local:
	npx nx run $(project):add --name $(projectName) --local

add-project-dependency:
	npx nx run $(project):add --name $(dependency)

remove-project-dependency:
	npx nx run $(project):remove --name $(dependency)

remove-project-dependency-local:
	npx nx run $(project):remove --name $(dependency)

add-project-dependency-version:
	npx nx run $(project):add --name $(dependency)==$(version)

run-python-script:
	poetry run python $(root_dir)/$(path)

update-poetry:
	poetry update

update-monorepo:
	npx nx run $(project):update

add-python-project:
	npx nx generate @nxlv/python:project $(projectName) \
		--type=$(type) \
		--description=$(description) \
		--directory=$(directory) \
		--packageName=$(packageName) \
		--moduleName=$(moduleName) \
		--publishable=$(publishable)
