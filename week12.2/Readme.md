1.npx tsc --init
2.{
	"rootDir": "./src",
	"outDir": "./dist"
}

### pick
Pick allows you to create a new type by selecting a set of properties (Keys) from an existing type (Type).

// For a profile display, only pick `name` and `email`
type UserProfile = Pick<User, 'name' | 'email'>;

### Partial

Partial makes all properties of a type optional, creating a type with the same properties, but each marked as optional.

 type updateProfileOptional = Partial<updateProfile>;


### Readonly
 When you have a configuration object that should not be altered after initialization, making it Readonly ensures its properties cannot be changed.

 readonly age:number,

### Record
Record let’s you give a cleaner type to objects