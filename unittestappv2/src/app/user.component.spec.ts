import { UserService } from './user.service';
import { UserComponent } from './user.component';
import { autoSpy } from 'auto-spy';
import { User } from './types/user.type';
import { MessageService } from './message.service';

describe('UserComponent', () => {
  it('when ngOnInit is called it should return user', () => {
    // arrange
    const { build, service } = setup().default();
    const usercompoent = build();

    service.getUser.and.returnValue({ userName: 'subramanian' } as User)
    // act
    usercompoent.ngOnInit();
    // assert
    expect(usercompoent.user).toEqual({ userName: 'subramanian' })
  });

  it('When ngonInt is called it should return message', () => {
    const { build, messageService } = setup().default();
    const usercompoent = build();
    messageService.sayHello.and.returnValue('hello');
    // act
    usercompoent.ngOnInit();
    // assert
    expect(usercompoent.message).toEqual('hello');
  });

  it('when private method is tested', () => {
    // arrange
    const { build, service } = setup().default();
    const usercompoent = build();
    expect(usercompoent["secret"]()).toEqual("pass")
  });

});

function setup() {
  const messageService = autoSpy(MessageService);
  const service = autoSpy(UserService);

  const builder = {
    messageService,
    service,
    default() {
      return builder;
    },
    build() {
      return new UserComponent(service, messageService);
    }
  };

  return builder;
}
